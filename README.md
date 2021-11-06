# chino-egg-nuxt

Nuxt project with egg by chino.

## 核心特性

1. 整合Sentry，Server 和 Client 分开上报
2. 整合stylelint
3. 整合commit lint
4. 使用`yarn debug:server`仅启动Egg部分单独开发，减少重新build Nuxt的时间
5. Nuxt没有的路由直接fallback到Egg，可以直接编写接口，Egg模板渲染等多种方式结合
