<template>
  <div class="loading-wrapper" v-if="loading">
    <div class="loading-container">
      <img class="loading-spin" src="../assets/loading.svg" alt="loading" />
      <!-- <span class="loading-text">Loading...</span> -->
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style lang="scss">
.loading-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-container {
  width: 100px;
  height: 100px;
  border-radius: 20px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.loading-spin {
  width: 70px;
}

// .loading-text {
//   position: absolute;
//   bottom: 10px;
//   color: #FFF;
// }
</style>