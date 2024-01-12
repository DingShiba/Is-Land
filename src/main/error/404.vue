<template>
    <div class="main-error-404 error-page">
      <img src="./noPage.png" alt="">
      <p>您访问的页面不存在!</p>
      <a href="javascript:;" @click="toLogin" class="home-link">返回首页</a>
    </div>
</template>

<script>
export default {
  name:"main-error-404",
  methods:{
    toLogin(){
      this.$router.push({
        path:"/index"
      })
    }
  }
}
</script>

<style scoped>
    .error-page{
        text-align: center;
        position:absolute;
        width: 100%;
        text-align: center;
    }
    .error-page p{
      font-size: 20px;
      padding-top: 20px;
    }
    .home-link{
      text-decoration: underline;
    }
</style>
