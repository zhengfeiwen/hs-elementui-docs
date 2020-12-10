<template>
  <div class="login-container" @click="hanlderArea('hide')" >
    <div class="login-main">
      <div class="login-header">
        <p class="title">{{ $t("login.title") }}</p>
        <p class="desc">{{ $t("login.desc") }}</p>
      </div>
      <el-form
        ref="registerForm"
        v-if="!login"
        :rules="loginRules"
        :model="registerForm"
        class="login-form"
        autocomplete="on"
        label-position="left"
      >
      <div class="line id-phone">
        <div class="area" @click="hanlderArea">
          <span>{{areaVal}}</span>
          <div :class="areaList">
            <span @click="handleSelectArea(item)" v-for="(item,i) in countrysOptions" :key="i">{{item.name}}&nbsp;+&nbsp;{{item.tel}}</span>
          </div>
          <svg class="Zi Zi--Select Select-arrow" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12 16.183l2.716-2.966a.757.757 0 0 1 1.064.001.738.738 0 0 1 0 1.052l-3.247 3.512a.758.758 0 0 1-1.064 0L8.22 14.27a.738.738 0 0 1 0-1.052.758.758 0 0 1 1.063 0L12 16.183zm0-9.365L9.284 9.782a.758.758 0 0 1-1.064 0 .738.738 0 0 1 0-1.052l3.248-3.512a.758.758 0 0 1 1.065 0L15.78 8.73a.738.738 0 0 1 0 1.052.757.757 0 0 1-1.063.001L12 6.818z" fill-rule="evenodd"></path>
          </svg>
        </div>
        <div class="phone">
          <input maxlength="13" placeholder="手机号" type="text" v-model="phone" name="phone" id="phone">
        </div>
      </div>
      <div class="line txt-code">
        <div class="code">
          <input :placeholder="codePlaceholder" v-model="code" type="text" name="code" id="code">
        </div>
        <div :class="getCode"><a @click="handleGetCode" href="#">{{codeAlert}}</a></div>
        <div :class="timer">{{codeTime}} 秒后可重发</div>
      </div>
      <div class="line">
        <div :class="soundCode"><a @click="changeCode" href="#">{{changeCodeTxt}}</a></div>
      </div>
      <div class="line">
        <el-button class='btn register' type="primary">注册</el-button>
      </div>
      <div class="line">
        <div class="zhifou-rights">
          注册即代表同意<a href="#">《知否协议》</a> &nbsp;<a href="#">《隐私保护指引》</a>&nbsp;<a class="register" href="">注册机构号</a>
        </div>
      </div>
      </el-form>
      <el-form
        v-else
        :model="loginForm"
        class="login-form"
        ref="loginForm">
        <div class="line count">
          <input maxlength="13" placeholder="手机号或邮箱" type="text" v-model="loginForm.username" name="count" id="count">
        </div>
        <div class="line pwd">
          <input placeholder="密码" v-model="loginForm.password" type="password" name="pwd" id="pwd">
        </div>
        <div class="line login-code">
          <div class="login-txt-code">
            <input placeholder="验证码" v-model="picCode" type="text" name="picCode" id="picCode">
          </div>
          <div class="pic-code">
            <vue-img-verify @getimgcode="getImgCode" ref="vueImgVerify" />
          </div>
        </div>
         <div class="line">
          <el-button
            class='btn login'
            type="primary"
            @click.native.prevent="handleLogin"
          >登录</el-button>
        </div>
      </el-form>
      <div class="download">
        <div class="btn-login">{{loginPageTxtPre}}<a @click="loginPage" href="#">{{loginPageTxt}}</a></div>
        <el-button type="info" class="app-load">{{
          $t("login.AppDownLoad")
        }}</el-button>
      </div>
    </div>
    <el-dialog :title="$t('login.thirdparty')" :visible.sync="showDialog">
      {{ $t("login.thirdpartyTips") }}
      <br />
      <br />
      <br />
      <social-sign />
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { Dictionary } from 'vue-router/types/router'
import { Form as ElForm, Input } from 'element-ui'
import { UserModule } from '@/store/modules/user'
import { isValidUsername } from '@/utils/validate'
import LangSelect from '@/components/LangSelect/index.vue'
import SocialSign from './components/SocialSignin.vue'
import countrys from './countrys'
import vueImgVerify from './vue-img-verify.vue'

@Component({
  name: 'Login',
  components: {
    LangSelect,
    SocialSign,
    vueImgVerify
  }
})
export default class extends Vue {
  private validateUsername = (rule: any, value: string, callback: Function) => {
    if (!isValidUsername(value)) {
      callback(new Error('Please enter the correct user name'))
    } else {
      callback()
    }
  }

  private validatePassword = (rule: any, value: string, callback: Function) => {
    if (value.length < 6) {
      callback(new Error('The password can not be less than 6 digits'))
    } else {
      callback()
    }
  }

  private registerForm = {}
  private loginForm = {
    username: 'admin',
    password: '111111'
  }

  private loginRules = {
    username: [{ validator: this.validateUsername, trigger: 'blur' }],
    password: [{ validator: this.validatePassword, trigger: 'blur' }]
  }

  private passwordType = 'password'
  private loading = false
  private showDialog = false
  private capsTooltip = false
  private redirect?: string
  private otherQuery: Dictionary<string> = {}
  private areaVal = '中国 +86';
  private curArea = '86';
  private phone = '';
  private code = '';
  private login = !1;
  private loginPageTxt = '登录'
  private loginPageTxtPre = '已有账号？'
  private picCode = '';
  private codeStyle = [
    {
      codeAlert: '重新获取短信验证码',
      codePlaceholder: '输入6位短信验证码',
      changeCodeTxt: '接收语音验证码'
    }, {
      codeAlert: '重新获取语音验证码',
      codePlaceholder: '输入6位语音验证码',
      changeCodeTxt: '接收短信验证码'
    }
  ];

  private codeStyleIndex = 0;
  private codeAlert = '获取短信验证码';
  private codePlaceholder = '输入6位短信验证码';
  private changeCodeTxt = '接收语音验证码';
  private countrysOptions = countrys;
  private codeTime = 60;
  private oTimer:any;
  private imgCode = '';
  private areaList = {
    'area-list': true,
    active: false
  }

  private soundCode = {
    'sound-code': true,
    hidden: false
  }

  private getCode = {
    'get-code': true,
    hidden: false
  }

  private timer = {
    timer: true,
    hidden: true
  }

  @Watch('phone')
  private onPhoneChange (phone: string) {
    if (phone.length === 11 && !phone.includes(' ')) {
      this.phone = phone.slice(0, 3) + ' ' + phone.slice(3, 7) + ' ' + phone.slice(7)
    }
  }

  @Watch('$route', { immediate: true })
  private onRouteChange (route: Route) {
    // TODO: remove the 'as Dictionary<string>' hack after v4 release for vue-router
    // See https://github.com/vuejs/vue-router/pull/2050 for details
    const query = route.query as Dictionary<string>
    if (query) {
      this.redirect = query.redirect
      this.otherQuery = this.getOtherQuery(query)
    }
  }

  mounted () {
    if (this.loginForm.username === '') {
      (this.$refs.username as Input).focus()
    } else if (this.loginForm.password === '') {
      (this.$refs.password as Input).focus()
    }
  }

  private checkCapslock (e: KeyboardEvent) {
    const { key } = e
    this.capsTooltip =
      key !== null && key.length === 1 && key >= 'A' && key <= 'Z'
  }

  private getImgCode (code: string) {
    this.imgCode = code
  }

  private showPwd () {
    if (this.passwordType === 'password') {
      this.passwordType = ''
    } else {
      this.passwordType = 'password'
    }
    this.$nextTick(() => {
      (this.$refs.password as Input).focus()
    })
  }

  private checkCode () {
    if (this.imgCode.toLowerCase() !== this.picCode.toLowerCase()) {
      this.$message.error('验证码错误')
      return false
    }
    return true
  }

  private handleLogin () {
    if (!this.checkCode()) {
      return
    }
    (this.$refs.loginForm as ElForm).validate(async (valid: boolean) => {
      if (valid) {
        this.loading = true
        await UserModule.Login(this.loginForm)
        this.$router
          .push({
            path: this.redirect || '/',
            query: this.otherQuery
          })
          .catch((err) => {
            console.warn(err)
          })
        // Just to simulate the time of the request
        setTimeout(() => {
          this.loading = false
        }, 0.5 * 1000)
      } else {
        return false
      }
    })
  }

  private getOtherQuery (query: Dictionary<string>) {
    return Object.keys(query).reduce((acc, cur) => {
      if (cur !== 'redirect') {
        acc[cur] = query[cur]
      }
      return acc
    }, {} as Dictionary<string>)
  }

  private hanlderArea (flag: string) {
    if (flag === 'hide') {
      this.areaList.active = !1
    } else {
      event?.preventDefault()
      event?.stopPropagation()
      this.areaList.active = !this.areaList.active
    }
  }

  private handleSelectArea (area: any) {
    this.curArea = area.tel
    this.areaVal = area.name + '+' + area.tel
  }

  private changeCode () {
    this.codeAlert = this.codeStyle[++this.codeStyleIndex % 2].codeAlert
    this.codePlaceholder = this.codeStyle[this.codeStyleIndex % 2].codePlaceholder
    this.changeCodeTxt = this.codeStyle[this.codeStyleIndex % 2].changeCodeTxt
  }

  private handleGetCode () {
    if (!this.checkPhone(this.phone)) {
      return
    }
    this.getCodeSuccess()
  }

  private getCodeSuccess () {
    this.codeTime = 60
    this.troggleCode()
    this.oTimer = setInterval(() => {
      this.codeTime--
      if (this.codeTime === 0) {
        this.troggleCode()
        clearInterval(this.oTimer)
      }
    }, 1000)
  }

  private troggleCode () {
    this.soundCode.hidden = !this.soundCode.hidden
    this.getCode.hidden = !this.getCode.hidden
    this.timer.hidden = !this.timer.hidden
  }

  private checkPhone (phone:string) {
    if (!(/^1[3456789]\d{9}$/.test(phone.replace(/\s*/g, '')))) {
      this.$message.error('手机号码有误，请重填')
      return false
    }
    return true
  }

  private insertStr (soure: string, start: number, newStr: string) {
    return soure.slice(0, start) + newStr + soure.slice(start)
  }

  private loginPage () {
    this.login = !this.login
    this.loginPageTxtPre = (this.login ? '未注册账号？' : '已有账号？')
    this.loginPageTxt = (this.login ? '前往注册' : '登录')
  }
}
</script>

<style lang='scss'>
// References: https://www.zhangxinxu.com/wordpress/2018/01/css-caret-color-first-line/
@supports (-webkit-mask: none) and (not (cater-color: $loginCursorColor)) {
  .login-container .el-input {
    input {
      color: $loginCursorColor;
    }
    input::first-line {
      color: $lightGray;
    }
  }
}

.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      height: 47px;
      background: transparent;
      border: 0px;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $lightGray;
      caret-color: $loginCursorColor;
      -webkit-appearance: none;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $loginBg inset !important;
        -webkit-text-fill-color: rgb(12, 11, 11) !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: $loginBg;
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: overlay;
  .login-main {
    border: 50px solid $loginBg;
    box-sizing:content-box;
    position: relative;
    width: 380px;
    min-width: 380px;
    margin: auto auto;
    overflow: hidden;
    background-color: #fff;
    .login-header {
      width: 100%;
      text-align: center;
      color: #0084d6;
      user-select: none;
      p {
        margin: 0;
      }
      .title {
        font-size: 30px;
        margin: 10px 0 20px;
      }
      .desc {
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
    .login-form {
      margin: 0 30px;
      display: flex;
      flex-direction: column;
      .line{
        width: 100%;
        margin-bottom: 16px;
        .sound-code{
          font-size: 12px;
          color: #cdcdcd;
          text-align: right;
          user-select: none;
          &:hover{
            color:#888282
          }
        }
        .register{
          height: 36px;
          width: 100%;
          background-color: #009DD7;
          color:#0084d6;
        }
        .login{
          width:100%;
        }
        .register.btn{
          color:#fff;
        }
        .zhifou-rights{
          font-size: 12px;
          color: #cdcdcd;
          user-select: none;
          a{
            background-color: #fff;
            &:hover{
              color:#0084d6;
            }
          }
        }
      }
      .id-phone{
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #cdcdcd;
        .area{
          display: flex;
          flex-direction: row;
          font-size: 13px;
          color: #cdcdcd;
          user-select: none;
          justify-content:space-between;
          svg{
            height: 30px;
          }
          &:hover{
            color:#888282
          }
          span{
            padding-left: 6px;
            width: max-content;
          }
          .area-list{
            position: absolute;
            display: none;
            flex-direction: column;
            border: 1px solid #e6e6e6;
            width: 180px;
            max-height: 290px;
            overflow: overlay;
            background-color: #fff;
            z-index: 10;
            span{
              padding: 2px 10px;
              color:#888282;
              &:hover{
                background-color: #f2f2f2;
              }
            }
          }
          .area-list.active{
            display: flex;
          }
        }
        .phone{
          &::before{
            content:'|';
            color: #cdcdcd;
            margin: 0 5px 0 0;
          }
          #phone{
            border: none;
            outline: none;
            width:calc(100% - 10px);
            font-size: 13px;
            &::-webkit-input-placeholder {
              font-size: 13px;
              color: #cdcdcd;
              user-select: none;
              padding-left:6px;
            }
          }
        }
      }
      .txt-code{
        width: 100%;
        height: 30px;
        line-height: 30px;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #cdcdcd;
        .code{
          width: calc(100% - 130px);
          margin-right: 10px;
          #code{
            border: none;
            outline: none;
            font-size: 13px;
            &::-webkit-input-placeholder {
              font-size: 13px;
              color: #cdcdcd;
              user-select: none;
              padding-left:6px;
            }
          }
        }
        .get-code{
          width: 120px;
          font-size: 12px;
          user-select: none;
          color:#0084d6;
          text-align:right;
        }
        .timer{
          width: 120px;
          font-size: 12px;
          user-select: none;
          color:#888282;
          text-align:right;
        }
      }
      .count{
        width:calc(100% - 40px);
        margin:10px 20px;
        border-bottom: 1px solid #cdcdcd;
        #count{
          width:100%;
          outline:none;
          border:none;
          font-size: 13px;
          background-color: #fff !important;
        }
      }
      .pwd{
        width:calc(100% - 40px);
        margin:10px 20px;
        border-bottom: 1px solid #cdcdcd;
        #pwd{
          width:100%;
          outline:none;
          border:none;
          font-size: 13px;
          background-color: #fff !important;
        }
      }
      .login-code{
        width:calc(100% - 40px);
        margin:0 20px 10px;
        display: flex;
        .login-txt-code{
          border-bottom: 1px solid #cdcdcd;
          width: calc(100% - 125px);
          height: 52px;
          line-height: 75px;
          margin-right: 5px;
        }
        #picCode{
          width:100%;
          outline:none;
          border:none;
          font-size: 13px;
          background-color: #fff !important;
        }
      }
    }
    .download{
      width: 100%;
      height:100px;
      background-color: #B2E6F9;
      .btn-login{
        user-select: none;
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 13px;
        background-color: #f2f2f2;
        text-align: center;
        margin-bottom:20px;
        a{
         color: #0084d6;
        }
      }
      .app-load{
        width: 100%;
        height:40px;
      }
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $darkGray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: $lightGray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }

      .set-language {
        color: #fff;
        position: absolute;
        top: 3px;
        font-size: 18px;
        right: 0px;
        cursor: pointer;
      }
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $darkGray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
.hidden{
  display: none;
}
</style>
