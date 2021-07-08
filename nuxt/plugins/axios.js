export default function ({ $axios, redirect }) {
  $axios.onError(error => {
    // 在这里可以直接做跳转登录过期重定向等逻辑
    if (error.response.status === 500) {
      redirect('/sorry')
    }
  })
}