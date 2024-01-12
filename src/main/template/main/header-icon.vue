<template>
  <div class="header-icon" id="header-icon">
    <a-dropdown :trigger="['click']" v-model="noticeDropDownVisible" placement="bottomRight" overlayClassName="notice-dropdown">
      <span class="header-icon-notice">
        <a-badge dot>
          <a-icon type="bell" style="font-size:16px;" />
        </a-badge>
      </span>
      <div  slot="overlay">
        <a-menu style="margin-top: -2px;"  class="header-notice-content">
          <a-tabs v-model="currentNoticeKey" >
            <a-tab-pane v-for="(n,index) in noticeData" :key="index" :tab="noticeType[index]+'('+noticeData[index].length+')'">
                <a-list  :data-source="noticeData[currentNoticeKey]" size="small">
                  <a-list-item slot="renderItem" slot-scope="item, index" @click="toPath(item)" style="cursor: pointer;">
                    <a-list-item-meta
                        :description="item.time"
                      >
                       <div  slot="title" >{{ item.data}}</div>
                       <a-avatar slot="avatar" icon="bell"></a-avatar>
                      </a-list-item-meta>
                  </a-list-item>
                </a-list>
            </a-tab-pane>
         </a-tabs>
       </a-menu>
      </div>
    </a-dropdown>
    <a-dropdown>
      <a class="ant-dropdown-link left" @click="e => e.preventDefault()">
          <a-avatar style="backgroundColor:#87d068;" icon="user" />
          {{userInfo.userName}}
        <a-icon type="down"/>
      </a>
      <a-menu slot="overlay" style="margin-top: -10px;">
        <a-menu-item @click.native="openUpdatePwd">
          <a href="javascript:;">
            <a-icon type="lock"/>&nbsp;修改密码</a>
        </a-menu-item>
         <a-menu-item @click.native="sysInfo">
          <a href="javascript:;">
            <a-icon type="info-circle"/>&nbsp;系统信息</a>
        </a-menu-item>
        <a-menu-item @click.native="exitSys">
          <a href="javascript:;">
            <a-icon type="login"/>&nbsp;退出登录</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-dropdown v-if="skinTheme.length>0">
      <a class="ant-dropdown-link" @click="e => e.preventDefault()">
        <i class="iconfont icon-theme les-theme-icon" :style="'color:'+(currentTheme && currentTheme.color)"></i>
      </a>
      <a-menu slot="overlay">
        <a-menu-item v-for="(t,index) in skinTheme" :key="t.label"  @click.native="changeTheme(t,index)">
          <!--<i class="iconfont icon-theme les-theme-icon les-theme-icon2" :style="'color:'+t.color"></i>-->
          {{t.label}}
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-modal v-model="passwordVisible" title="修改密码" :footer="null" :maskClosable="false">
      <a-spin :spinning="updatePwdLoading" top="密码修改中...">
        <a-form-model ref="formDataPwd" layout="inline" :model="formDataPwd" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="输入旧密码" prop="oldPwd">
            <a-input v-model="formDataPwd.oldPwd"  type="password">
              <a-icon slot="prefix" type="unlock" style="color:rgba(0,0,0,.25)" />
            </a-input>
          </a-form-model-item>
          <a-form-model-item label="输入新密码" prop="newPwd">
            <a-input-password  v-model="formDataPwd.newPwd" type="password" placeholder="">
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input-password>
          </a-form-model-item>
          <a-form-model-item label="确认新密码" prop="checkPwd">
            <a-input-password v-model="formDataPwd.checkPwd" type="password" placeholder="">
              <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" />
            </a-input-password >
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 10, offset: 8 }">
            <a-button type="primary" @click="updatePassword('formDataPwd')">
              修改
            </a-button>
            <a-button style="margin-left: 10px" @click="resetForm('formDataPwd')">
              重置
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-spin>
    </a-modal>
  </div>
</template>
<script>
import {DelCookie,DelLocalStorage} from "@/libs/util";
  export default {
    name: "header-icon",
    data(){
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('新密码不能为空'));
        } else {
          if (this.formDataPwd.checkPwd !== '') {
            this.$refs.formDataPwd.validateField('checkPass');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入新密码'));
        } else if (value !== this.formDataPwd.newPwd) {
          callback(new Error("二次密码不一致"));
        } else {
          callback();
        }
      };
      return{
       noticeDropDownVisible: false,
       currentNoticeKey:"1",
       noticeType: GlobalConfig.noticeType,
       noticeData:{

       },
        passwordVisible:false,
        isPasswordValid: false,
        formDataPwd:{
          oldPwd:"",
          newPwd:"",
          checkPwd:""
        },
        labelCol: { span: 5 },
        wrapperCol: { span: 18},
        rules: {
          oldPwd: [{ required: true, trigger: 'change',message: '旧密码必填' }],
          newPwd: [{ required: true,validator: validatePass, trigger: 'change' }],
          checkPwd: [{ required: true,validator: validatePass2, trigger: 'change' }],
        },
        updatePwdLoading: false
      }
    },
    computed: {
      'skinTheme'(){
         return this.$store.state.app.theme;
      },
      'userInfo'() {
        return this.$store.state.user;
      },
      'themeIndex'(){
          return this.$store.state.app.themeIndex;
      },
      'currentTheme'(){
        return  this.$store.state.app.currentTheme;
      }
    },
    methods: {
      openUpdatePwd(){
        this.passwordVisible = true;
      },
      resetForm(formName){
        this.$refs[formName].resetFields();
      },
      updatePassword(formName){
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.updatePwdLoading = true;
            this.$http({
              url:"/zuul/upm/user/modifyPwd",
              method:'post',
              params:{
                newPassword: this.formDataPwd.newPwd,
                oldPassword: this.formDataPwd.oldPwd
              }
            }).then(res=>{
              if(res.data.success){
                this.$message.success("修改密码成功,请重新登录");
                setTimeout(()=>{
                  this.updatePwdLoading = false;
                  this.$router.replace({
                    name:"login"
                  });
                },1000);
              }else{
                this.$message.error(res.data.message);
              }
            }).catch(e=>{
              this.updatePwdLoading = false;
            });
          } else {
            return false;
          }
        });
      },
      loginOut() {
        this.$http({
          url: "/zuul/oauth/logout",
          method: 'post'
        });
      },
      exitSys() {
        let self = this;
        this.$confirm({
          title: '操作提示',
          content: '确定退出系统?',
          okType: 'danger',
          onOk: () => {
            self.loginOut();
            this.$store.commit('resetState',()=>{
              setTimeout(()=>{
                self.$destroyAll();
                DelLocalStorage('menuCache');
                DelCookie('LESITSID');
                self.$router.push({
                  path: '/login'
                });
              },500);
            });
          },
          onCancel:()=>{
            self.$destroyAll();
          }
        })
      },
      sysInfo(){
         let self = this;
         const h = this.$createElement;
         const modal  = this.$info({
            title: '系统信息',
            okText:"关闭",
            content: h('div', {}, [
              h('p', '版本号: V3'),
            ]),
            onOk() {
              self.$destroyAll();
            },
          });
      },
      changeTheme(theme,index){
        if(this.themeIndex != index){
          this.changeThemeHref(theme.href);
          this.$store.commit('changeThemeIndex',index);
        }
      },
      changeThemeHref(href){
       try{
          if(!href){
           href = this.skinTheme[this.themeIndex]["href"];
        }
        let antLink = document.getElementById('link-antd');
        antLink.setAttribute("href","./"+href);
       }catch(e){
         }
      },
      getNotice(){
        // this.$http({
        //   url:"/zuul/nlgy/check/problem/notice"
        // }).then(res=>{
        //   this.noticeData = res.data.data || {};
        // });
      },
      toPath(r){
        this.$router.push({
          path:r.href
        })
      }
    },
    mounted(){
      setTimeout(()=>{
        this.changeThemeHref();
        this.getNotice();
      },0);
    }
  }
</script>

<style scoped>
  .header-icon-notice{
    float: left;
    display: inline-block;
    margin-right: 10px;
    width: 30px;
    text-align: center;
    cursor: pointer;
  }
  .header-notice-content{
    padding: 0px 10px 6px 10px;
    width:260px;
  }
  .ant-dropdown-link{
    color: #1890ff;
  }
  .ant-dropdown-link img {
    width: 26px;
    border-radius: 50%;
    margin: 0 10px;
  }
  .les-theme-icon{
    font-size: 40px;
    color: #52c41a;
  }
  .les-theme-icon2{
    font-size: 30px;
  }
</style>
<style>
   .notice-dropdown .ant-tabs-nav .ant-tabs-tab{
       padding: 10px 16px;
  }
  .notice-dropdown .ant-tabs-nav .ant-tabs-tab-active{
    border-radius: 10px;
    color: rgb(22,93,255);
  }
  .notice-dropdown .ant-tabs-nav-container{
    text-align:center;
  }
</style>
