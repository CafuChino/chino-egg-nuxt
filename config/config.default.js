/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
  config.cluster = {
    listen: {
      path: '',
      port: 3000,
      hostname: '127.0.0.1',
    },
  };
  config.onerror = {
    all(err, ctx) {
      // 在此处定义针对所有响应类型的错误处理方法
      // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
      ctx.app.sentry.captureException(err);
      ctx.body = 'error';
      ctx.status = 500;
    },
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1625736771626_1716';

  // add your middleware config here
  config.middleware = [ 'requestLogger' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    requestLogger: {
      ignore: [ '/_nuxt', '/__webpack_hmr' ],
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
