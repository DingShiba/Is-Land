<template>
  <div class="main">
    <a-form-model ref="ruleForm" class="user-layout-login" :rules="rules" :model="formData"
                  @submit="handleSubmit" @submit.native.prevent>

      <a-form-model-item prop="username">
        <a-input
          v-model="formData.username"
          size="large"
          type="text"
          placeholder="用户名"
          style="width:100%;"
        >
          <a-icon slot="prefix" type="user"/>
        </a-input>
      </a-form-model-item>
      <br/>
      <a-form-model-item prop="password">
        <a-input
          v-model="formData.password"
          size="large"
          type="password"
          autocomplete="false"
          placeholder="密码"
        >
          <a-icon slot="prefix" type="lock"/>
        </a-input>
      </a-form-model-item>
      <a-form-model-item style="margin-top:24px">
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
          :loading="loading"
        >
          {{ loading ? '登录中' : '登录' }}
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import JSEncrypt from "jsencrypt";

export default {
  components: {},
  data() {
    return {
      formData: {
        username: "",
        password: "",
        code: ""
      },
      rules: {
        username: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ],
      },
      loading: false,
      isEncrypt: !!GlobalConfig.isEncrypt,
      rdsPwd:""
    }
  },
  methods: {
    handleSubmit() {
      if (!this.loading) {
        this.$refs.ruleForm.validate(valid => {
          if (valid) {
            this.login();
          } else {
            return false;
          }
        });
      }
    },
    rsaECB(pwd,rds){
      const  thisKeyPair =  new JSEncrypt({default_key_size: 1024});
      thisKeyPair.setPublicKey(rds);
      return thisKeyPair.encrypt(pwd);
    },
    login() {
      this.loading = true;
      let username = this.formData.username;
      let password = !!this.isEncrypt?this.rsaECB(this.formData.password,this.rdsPwd):this.formData.password;
      let code = this.formData.code;
      this.$http({
        url:this.isEncrypt?"/zuul/oauth/secureLogin":"/zuul/oauth/",
        data: this.$qs.stringify({
          username,
          password,
          code
        }),
        method: "post"
      }).then(res => {
        if (res.data.success) {
          this.$store.dispatch("getUserInfo", (r, data) => {
            this.formData.username = "";
            this.formData.password = "";
            this.loading = false;
            if (!!r) {
              this.$message.success({
                content: "欢迎您," + data.name,
                duration: 1
              });
              this.$router.push({
                name: r.name
              });
            } else {
              this.$router.push({
                path: "/upm/user"
              });
            }
          });
        } else {
          this.loading = false;
          this.$message.error("登录失败，" + (!!res.data.message ? res.data.message : ""));
        }
      });
      setTimeout(() => {
        this.loading = false;
      }, 5000);
    },
    getRdsPwd(){
      this.$http({
        url:"/zuul/oauth/rdsPwd"
      }).then(res=>{
        this.rdsPwd = res.data.data;
      })
    }
  },
  mounted() {
    this.formData.username = "";
    this.formData.password = "";
    if(!!this.isEncrypt){
      this.getRdsPwd();
    }
  }
}
</script>

<style lang="less" scoped>
.user-layout-login {
  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(0, 0, 0, 0.2);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }
  }
}
</style>
