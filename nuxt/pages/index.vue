<template>
  <div class="main">
    <h1 class="template_msg">Hello world.</h1>
    <h1 class="ssr_msg">{{ msg }}</h1>
    <h1 class="client_msg">{{ clientMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "",
  async asyncData(ctx) {
    // 虽然这个步骤本该在服务端渲染做，但是HMR会使得这一步在客户端做，所以要判断一下
    let getMessageRequest;
    if (!ctx.isHMR) {
      // 这个接口是来自自带的 egg 的
      getMessageRequest = await ctx.$axios.get("/api/index");
      try {
        foo();
      } catch (e) {
        ctx.req.ctx.app.sentry.captureException(e);
      }
    } else {
      getMessageRequest = await ctx.$axios.get("index");
    }
    return {
      msg: getMessageRequest.data,
    };
  },
  data() {
    return {
      msg: "",
      clientMsg: "",
    };
  },
  mounted() {
    // 客户端的请求不用拼接api，因为已经在环境变量里拼好了
    // 这个请求也是请求到egg
    this.$axios.get("index").then((res) => {
      this.clientMsg = res.data;
    });
    try {
      foo();
    } catch (e) {
      this.$sentry.captureException(e);
    }
  },
};
</script>

<style lang="scss">
$baseColor: gray;
.main {
  h1 {
    color: $baseColor;
  }
}
.template_msg {
  &::after {
    content: "<- 这个内容来自template编码";
    color: aquamarine;
  }
}
.ssr_msg {
  &::after {
    content: "<- 这个内容来自服务端渲染，页面返回的时候立刻就有了";
    color: coral;
  }
}
.client_msg {
  &::after {
    content: "<- 这个内容来自客户端渲染，要等到ajax结束才会显示";
    color: lightcoral;
  }
}
</style>
