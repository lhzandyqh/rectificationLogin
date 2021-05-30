<template>
  <div class="appContainer">
    <el-popover
      placement="bottom"
      width="200"
      trigger="hover">
      <div class="content">
        <span style="font-weight: bolder">当前用户：</span>
        <span style="font-weight: bolder">{{userName}}</span>
        <el-divider style="padding-top: 10px"></el-divider>
        <div class="function_item">
<!--          <div class="functionLogo">-->
<!--            <i class="el-icon-s-platform"></i>-->
<!--          </div>-->
<!--          <div class="functionTitle">-->
<!--&lt;!&ndash;            <el-button type="text" @click="gotoTeacher">进入系统</el-button>&ndash;&gt;-->
<!--          </div>-->
        </div>
        <div class="function_item">
          <div class="functionLogo">
            <i class="el-icon-key"></i>
          </div>
          <div class="functionTitle">
            <el-button type="text" @click="changeMyPassword">修改密码</el-button>
          </div>
        </div>
        <div class="function_item">
          <div class="functionLogo">
            <i class="el-icon-open"></i>
          </div>
          <div class="functionTitle">
            <el-button type="text" @click="logout">退出登录</el-button>
          </div>
        </div>
      </div>
      <i class="el-icon-s-custom" style="color: #121212" slot="reference"></i>
    </el-popover>
    <el-dialog
      :visible.sync="passwordFlag"
      :before-close="handleClose"
      title="修改我的密码"
      width="40%">
      <div class="changepasswordContainer">
        <el-row :gutter="5">
          <el-col :span="6">
            <div class="title">
              <span style="font-size: 16px;font-weight: bolder">输入我的旧密码</span>
            </div>
          </el-col>
          <el-col :span="12" :offset="1">
            <div class="input">
              <el-input v-model="oldPassWord" placeholder="请输入旧密码" show-password/>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="5" style="margin-top: 20px">
          <el-col :span="6">
            <div class="title">
              <span style="font-size: 16px;font-weight: bolder">输入我的新密码</span>
            </div>
          </el-col>
          <el-col :span="12" :offset="1">
            <div class="input">
              <el-input v-model="newPassword" placeholder="请输入新密码" show-password/>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="5" style="margin-top: 20px">
          <el-col :span="6">
            <div class="title">
              <span style="font-size: 16px;font-weight: bolder">确认新密码</span>
            </div>
          </el-col>
          <el-col :span="12" :offset="1">
            <div class="input">
              <el-input v-model="confirmpassword" placeholder="请确认新密码" show-password/>
            </div>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="passwordFlag = false">取 消</el-button>
        <el-button type="primary" @click="confirmToChangePassword">修改</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import {verifyLogin } from '@/api/login'
export default {
  name: 'userSettingPopover',
  props: {
    userName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      username: localStorage.getItem('loginName'),
      passwordFlag: false,
      oldPassWord: '',
      confirmpassword: '',
      newPassword: ''
    }
  },
  mounted () {
    this.username = localStorage.getItem('loginName')
  },
  methods: {
    changeMyPassword: function () {
      this.passwordFlag = true
    },
    gotoTeacher: function () {

    },
    logout: function () {
      this.$emit('tuichu')
    },
    confirmToChangePassword: function () {
      if (this.newPassword === '' || this.confirmpassword === '') {
        this.$message.error('密码不能为空')
      } else {
        if (this.newPassword !== this.confirmpassword) {
          this.$message({
            message: '两次密码输入不同',
            type: 'warning'
          })
        } else {
          // const prams = {
          //   oldpassword: this.oldPassWord,
          //   newpassword: this.newPassword,
          //   assertpassword: this.confirmpassword
          // }
          // console.log('检查token')
          // console.log(this.token)
          this.passwordFlag = false
          this.logout()
        }
      }
    }
  }
}
</script>

<style scoped>
  .content{
    text-align: center;
  }
  .function_item{
    float: left;
    display: inline-block;
  }
  .functionLogo{
    float: left;
    margin-left: 30px;
  }
  .functionTitle{
    float: left;
    margin-left: 60px;
    margin-top: -10px;
  }

</style>
