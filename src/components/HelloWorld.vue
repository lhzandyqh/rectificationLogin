<template>
  <div class="app-container">
    <div class="navigator">
      <div class="school_logo">
        <img src="../assets/schoollogo.png">
      </div>
      <div class="our_logo">
        <img src="../assets/ourlogo.png">
      </div>
      <div class="school_title">
        <img src="../assets/school_title.png">
      </div>
      <div class="login_container">
        <div style="margin-top: 40px">
          <span v-show="loginFlag" style="cursor: pointer;color: #727272" @click="openDialog">用户登录</span>
          <div v-show="!loginFlag">
            <user-setting-popover @tuichu="logout"></user-setting-popover>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content_container">
        <div class="content_first_layer">
          <div class="left_charts_container">
            <div class="echart_container">
              <div class="card_head">
                <div class="card_head_left">
                  <span>诊改动态</span>
                </div>
              </div>
              <div class="echart_block">
                <overview_echart_one v-if="echartsFlag"></overview_echart_one>
                <overview_echart_two v-else></overview_echart_two>
              </div>
            </div>
          </div>
          <div class="right_notice_container">
            <div class="box-card-right">
              <div class="card_head">
                <div class="card_head_left">
                  <span>诊改新闻</span>
                  <span class="more">更多</span>
                </div>
              </div>
              <div class="pic_container">
                <img src="../assets/huiyi.png">
              </div>
              <div class="news_content">
                <div class="news_item">
                  <span>●  诊改专委会对重庆职业技术学院诊改工作进行复核</span>
                  <span style="float: right;margin-right: 20px">2020-11-05</span>
                </div>
                <div class="news_item">
                  <span>●  专家组对内蒙古化工职业学院诊改工作开展现场复核</span>
                  <span style="float: right;margin-right: 20px">2020-10-30</span>
                </div>
                <div class="news_item">
                  <span>●  中职平台建设工作研讨会在上海举行</span>
                  <span style="float: right;margin-right: 20px">2020-05-16</span>
                </div>
                <div class="news_item">
                  <span>●  内部质量保证体系诊断与改进”护航无锡职院高质量发展</span>
                  <span style="float: right;margin-right: 20px">2020-04-12</span>
                </div>
                <div class="news_item">
                  <span>●  全国诊改专委会2020年主要工作安排</span>
                  <span style="float: right;margin-right: 20px">2020-03-29</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content_second_layer">
          <div class="system_logo">
            <div class="logo_con" style="text-align: center" @click="gotoZhengai">
              <img style="width: 60%;height: 80%" src="../assets/zhengai.png">
            </div>
            <div style="text-align: center">
              <span style="font-size: 14px;font-weight: bolder;color: #121212">内部质量管理</span>
            </div>
          </div>
          <div class="system_logo">
            <div class="logo_con" style="text-align: center" @click="gotoZhuanye">
              <img style="width: 60%;height: 80%" src="../assets/zhuanye.png">
            </div>
            <div style="text-align: center">
              <span style="font-size: 14px;font-weight: bolder;color: #121212">专业发展</span>
            </div>
          </div>
          <div class="system_logo">
            <div class="logo_con" style="text-align: center" @click="gotoZichan">
              <img style="width: 60%;height: 80%" src="../assets/zichan.png">
            </div>
            <div style="text-align: center">
              <span style="font-size: 14px;font-weight: bolder;color: #121212">资产管理</span>
            </div>
          </div>
          <div class="system_logo">
            <div class="logo_con" style="text-align: center" @click="gotoXueshen">
              <img style="width: 60%;height: 80%" src="../assets/hushi.png">
            </div>
            <div style="text-align: center">
              <span style="font-size: 14px;font-weight: bolder;color: #121212">学生发展</span>
            </div>
          </div>
          <div class="system_logo">
            <div class="logo_con" style="text-align: center" @click="gotoJiaoshi">
              <img style="width: 60%;height: 80%" src="../assets/renshi.png">
            </div>
            <div style="text-align: center">
              <span style="font-size: 14px;font-weight: bolder;color: #121212">人事管理</span>
            </div>
          </div>
          <div class="system_logo">
            <div class="logo_con" style="text-align: center" @click="gotoOa">
              <img style="width: 60%;height: 80%" src="../assets/oa.png">
            </div>
            <div style="text-align: center">
              <span style="font-size: 14px;font-weight: bolder;color: #121212">在线OA</span>
            </div>
          </div>
          <div class="system_logo">
            <div class="logo_con" style="text-align: center" @click="gotoWuxiao">
              <img style="width: 60%;height: 80%" src="../assets/keyan.png">
            </div>
            <div style="text-align: center">
              <span style="font-size: 14px;font-weight: bolder;color: #121212">科研管理</span>
            </div>
          </div>
          <div class="system_logo">
            <div class="logo_con" style="text-align: center" @click="gotoWuxiao">
              <img style="width: 60%;height: 80%" src="../assets/shengya.png">
            </div>
            <div style="text-align: center">
              <span style="font-size: 14px;font-weight: bolder;color: #121212">生涯测评</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright_container">
      <div style="text-align: center;">
        <span style="font-size: 12px;color: #727272">技术支持 中科智禾教育大数据中心 ©2020</span>
      </div>
    </div>
    <el-dialog
      title="登录"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose">
      <div class="login">
        <div>
          <el-input
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
            v-model="name">
          </el-input>
        </div>
        <div style="margin-top: 4%">
          <el-input
            placeholder="请输入密码"
            prefix-icon="el-icon-unlock"
            type="password"
            v-model="password">
          </el-input>
        </div>
        <div style="margin-top: 4%">
          <el-button type="primary" style="width: 100%" @click="beginLogin">登录</el-button>
        </div>
        <div style="margin-top: 1%;height: 5%">
          <div style="float: right">
            <el-button type="text">忘记密码</el-button>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
  </span>
    </el-dialog>
  </div>
</template>

<script>
// eslint-disable-next-line camelcase
import overview_echart_one from '@/components/echarts/overview_chart_three'
// eslint-disable-next-line camelcase
import overview_echart_two from '@/components/echarts/overview_chart_one'
import userSettingPopover from '@/components/user/userSettingPopover'
export default {
  name: 'HelloWorld',
  components: {
    overview_echart_one,
    overview_echart_two,
    userSettingPopover
  },
  watch: {

  },
  data () {
    return {
      name: 'rmyzAdmin',
      password: '111111',
      loginFlag: true,
      dialogVisible: false,
      echartsFlag: true,
      loginForm: {
        username: 'rmyzAdmin',
        password: '111111'
      }
    }
  },
  mounted () {
    this.jianchaLogin()
    setInterval(() => {
      this.changeFlag()
    }, 5000)
  },
  methods: {
    jianchaLogin: function () {
      console.log('检查')
      var flag = localStorage.getItem('flag')
      console.log(flag)
      if (flag === 1) {
        this.loginFlag = false
      } else {
        this.loginFlag = true
      }
    },
    gotoWuxiao: function () {
      this.$message({
        message: '系统暂未开放',
        type: 'warning'
      })
    },
    gotoOa: function () {
      if (this.loginFlag === true) {
        this.$message({
          message: '未登陆，请登陆后再试',
          type: 'warning'
        })
      } else {
        // window.location.href = 'https://zhongkeruitong.top/oa/index.html'
        window.open('https://zhongkeruitong.top/oa/index.html')
      }
    },
    gotoZhengai: function () {
      if (this.loginFlag === true) {
        this.$message({
          message: '未登陆，请登陆后再试',
          type: 'warning'
        })
      } else {
        window.open('https://zhongkeruitong.top/zgnbzlgl/index.html')
      }
    },
    gotoXueshen: function () {
      if (this.loginFlag === true) {
        this.$message({
          message: '未登陆，请登陆后再试',
          type: 'warning'
        })
      } else {
        window.open('https://zhongkeruitong.top/zgstudent/index.html')
      }
    },
    gotoZhuanye: function () {
      if (this.loginFlag === true) {
        this.$message({
          message: '未登陆，请登陆后再试',
          type: 'warning'
        })
      } else {
        window.open('https://zhongkeruitong.top/zgzy/zgzy/')
      }
    },
    gotoJiaoshi: function () {
      if (this.loginFlag === true) {
        this.$message({
          message: '未登陆，请登陆后再试',
          type: 'warning'
        })
      } else {
        window.open('https://zhongkeruitong.top/zgteacher/index.html')
      }
    },
    gotoZichan: function () {
      if (this.loginFlag === true) {
        this.$message({
          message: '未登陆，请登陆后再试',
          type: 'warning'
        })
      } else {
        window.open('https://zhongkeruitong.top/assetstorage/')
      }
    },
    changeFlag: function () {
      this.echartsFlag = !this.echartsFlag
    },
    openDialog: function () {
      this.dialogVisible = true
    },
    beginLogin: function () {
      this.dialogVisible = false
      setTimeout(() => {
        this.$message({
          message: '恭喜你，登录成功',
          type: 'success'
        })
        this.loginFlag = false
        localStorage.setItem('flag', 1)
      }, 1500)
    },
    logout: function () {
      console.log('退出')
      setTimeout(() => {
        this.$message({
          message: '退出成功',
          type: 'success'
        })
        this.loginFlag = true
        localStorage.setItem('flag', 0)
      }, 1500)
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {*/
/*  font-weight: normal;*/
/*}*/
/*ul {*/
/*  list-style-type: none;*/
/*  padding: 0;*/
/*}*/
/*li {*/
/*  display: inline-block;*/
/*  margin: 0 10px;*/
/*}*/
/*a {*/
/*  color: #42b983;*/
/*}*/
.app-container {
  width: 100%;
  height: 100%;
}
  .navigator {
    width: 100%;
    height: 15%;
    background-color: #ffffff;
    position: relative;
  }
  /*.inner {*/
  /*  height:50%;*/
  /*  width: 50%;*/
  /*  position: absolute;*/
  /*  top: 50%;*/
  /*  left: 50%;*/
  /*  transform: translate(-50%,-50%);*/
  /*  background-color: deepskyblue;*/
  /*}*/
  .school_logo {
    height: 100%;
    width: 7.5%;
    background-color: #ffffff;
    float: left;
    margin-left: 5%;
  }
  .our_logo {
    height: 80%;
    width: 7.5%;
    background-color: #ffffff;
    float: left;
  }
.our_logo img {
  width: 80%;
  height: 100%;
  margin-top: 10%;
}
  .school_logo img {
    width: 80%;
    height: 80%;
    margin-top: 10%;
  }
  .school_title {
    height: 100%;
    width: 20%;
    float: left;
  }
  .login_container {
    float: right;
    margin-right: 2%;
  }
   .school_title img {
    width: 90%;
    height: 100%;
    margin-top: 0%;
    margin-left: 5%;
  }
  .content {
    width: 100%;
    height: 80%;
    background-color: #30c1e5;
    background-image: url("../assets/bg.jpg");
  }
  .content_container {
    width: 100%;
    height: 100%;
  }
  .content_first_layer {
    width: 100%;
    height: 75%;
    /*background-color: #727272;*/
  }
  .left_charts_container {
    width: 60%;
    height: 100%;
    /*background-color: #30c1e5;*/
    float: left;
    padding: 20px;
    box-sizing: border-box;
  }
  .echart_container {
    width: 100%;
    height: 100%;
    /*background-color: white;*/
    background-color: rgba(255,255,255,0.6);
    box-sizing: border-box;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
  }
  .echart_block {
    height: 100%;
  }
  .right_notice_container {
    width: 40%;
    height: 100%;
    /*background-color: pink;*/
    padding: 20px;
    float: left;
    box-sizing: border-box;
  }
  .box-card-right {
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.6);
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .card_head {
    width: 100%;
    height: 10%;
  }
.card_head_left {
  font-weight: bolder;
  border-left-width: 5px;
  border-left-color: #55dfff;
  border-left-style: solid;
  padding-left: 20px;
}
.more {
  float: right;
  cursor: pointer;
  font-size: 15px;
  font-weight: lighter;
  color: #7a7a7a;
}
.news_content {
  display: flex;
  flex-direction: column;
  /*background-color: white;*/
  height: 40%;
  width: 100%;
  margin-top: 10px;
}
.news_item {
  width: 100%;
  height: 20%;
  cursor: pointer;
  /*background-color: red;*/
}
.news_item span {
  padding-left: 20px;
  color: #404040;
  font-size: 0.9rem;
}
.pic_container {
  width: 100%;
  height: 50%;
  background-color: #ff1058;
}
.pic_container img{
  width: 100%;
  height: 100%;
}
.dongtai {
  margin-top: 20px;
  margin-left: 20px;
}
  .content_second_layer {
    padding-top: 10px;
    width: 100%;
    height: 25%;
    /*background-color: #727272;*/
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .system_logo {
    width: 10%;
    height: 80%;
    /*background-color: red;*/
  }
  .logo_con img {
    cursor: pointer;
  }
  .left_card {
    padding: 1%;
    width: 50%;
    height: 90%;
    background-color: rgba(255,255,255,0.6);
    float: left;
    margin-left: 10%;
    margin-top: 1%;
  }
  .left_card_head{
    width: 100%;
    height: 10%;
  }
  .left_card_content {
    width: 100%;
    height: 90%;
    /*background-color: deepskyblue;*/
    padding-top: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .card_item {
    width: 47%;
    height: 30%;
    /*background-color: white;*/
  }
  .card_item img {
    cursor: pointer;
  }
  .img_con img {
    width: 30%;
    height: 80%;
    margin-top: 4%;
    margin-left: 2%;
    float: left;
  }
  .shuoming {
    margin-top: 10%;
  }
  .login_card {
    width: 30%;
    height: 95.5%;
    background-color: rgba(255,255,255,0.6);
    float: left;
    margin-top: 1%;
    margin-left: 2%;
    padding-left: 1%;
    padding-right: 1%;
  }
  .login_head {
    padding-top: 2%;
  }
  .login_head span {
    font-size: 20px;
    color: #727272;
    font-weight: bolder;
  }
  .login {
    margin-top: 5%;
  }
  .copyright_container {
    width: 100%;
    height: 10%;
    background-color: #ffffff;
  }
  .copyright_container {
    text-align: center;
  }
  .about {
    margin-top: 10%;
  }
  .about span {
    font-size: 20px;
    color: #727272;
    font-weight: bolder;
  }
</style>
