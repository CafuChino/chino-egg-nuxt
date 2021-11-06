'use strict';
const lodash = require('lodash');


function urlIsIgnored(url, list) {
  for (const path of list) {
    if (url.startsWith(path)) {
      return true;
    }
  }
  return false;
}
module.exports = options => {
  return async function requestLogger(ctx, next) {
    if (!urlIsIgnored(ctx.request.url, options.ignore)) {
      const start = new Date();
      await next();
      const ms = new Date() - start;
      const log = {
        method: ctx.request.method,
        url: ctx.request.url,
        status: ctx.response.status,
        ip: ctx.request.ip,
        userAgent: ctx.request.header['user-agent'],
        time: ms,
        body: lodash.get(ctx, 'request.body', ''),
        query: lodash.get(ctx, 'request.query', ''),
      };
      ctx.logger.info(JSON.stringify(log));
    } else {
      await next();
    }
  };
};
