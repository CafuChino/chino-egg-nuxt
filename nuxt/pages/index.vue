<template>
  <div class="main">
    <h1 class="template_msg">Hello world.</h1>
    <h1 class="ssr_msg">{{ msg }}</h1>
    <h1 class="client_msg">{{ clientMsg }}</h1>
  </div>
</template>

<script>
import api from '../api'
export default {
  name: "",
  async asyncData(ctx) {
    const getMessageRequest = await api.testApi.TestApi(ctx.$axios);
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
    api.testApi.TestApi(this.$axios).then((res) => {
      this.clientMsg = res.data;
    });
  },
};
</script>

<style lang="scss">
$baseColor: #888;

.main {
  h1 {
    color: $baseColor;
  }
}

.template_msg {
  &::after {
    content: "<- 这个内容来自template编码";
    color: #7FFFD4;
  }
}

.ssr_msg {
  &::after {
    content: "<- 这个内容来自服务端渲染，页面返回的时候立刻就有了";
    color: #FF7F50;
  }
}

.client_msg {
  &::after {
    content: "<- 这个内容来自客户端渲染，要等到ajax结束才会显示";
    color: #F08080;
  }
}
</style>
