'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { app, ctx } = this;
    const result = await ctx.curl('https://registry.npm.taobao.org/egg/latest', {
      // 自动解析 JSON response
      dataType: 'json',
      // 3 秒超时
      timeout: 3000,
    });
    // 这里请求的egg的接口，在正常情况会请求一个“总后端”，以下用CGI指代
    // CGI 只做最基础的事情，比如鉴权，和返回数据库的数据，以及进行其他业务流程
    // 而这里的egg就可以做对端的功能点，比如将cookies里的accessToken取出拼接到路由以方便CGI兼容不支持token的端
    // 以及将CGI返回的原始数据整合成前端可用的格式，或者根据前端传来的信息，并发数个请求到内网CGI后整合返回，可以大大减少前端请求数
    const name = result.data.name;
    // 如果有错误可以这样捕捉
    app.sentry.captureException(new Error('test error'));
    ctx.body = `hi, ${name}`;
  }
}

module.exports = HomeController;
