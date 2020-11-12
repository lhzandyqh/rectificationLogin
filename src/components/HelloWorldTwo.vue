<template>
  <div class="app-container">
    <div class="navigator">
      <div class="school_logo">
        <img src="../assets/schoollogo.png">
      </div>
      <div class="school_title">
        <img src="../assets/school_title.png">
      </div>
    </div>
    <div class="content">
      <div class="content_container">
        <div class="left_card">
          <div class="left_card_head">
            <span style="height: 100%;font-size: 20px;color: #727272;font-weight: bolder;">教学诊改平台</span>
            <el-divider></el-divider>
          </div>
          <div class="left_card_content">
            <div class="card_item">
              <div class="img_con">
                <img src="../assets/zhuanye.png">
              </div>
              <div class="shuoming">
                <div>
                  <span style="font-size: 25px;color: #727272">专业建设</span>
                </div>
                <div>
                  <span style="font-size: 16px;color: #636363">校园学科专业点申报与评审，专业信息管理，专业平台建设</span>
                </div>
              </div>
            </div>
            <div class="card_item">
              <div class="img_con">
                <img src="../assets/zichan.png">
              </div>
              <div class="shuoming">
                <div>
                  <span style="font-size: 25px;color: #727272">资产库存</span>
                </div>
                <div>
                  <span style="font-size: 16px;color: #636363">校园资产流转管理，资产分类处置，库存管理，资产可视化，资产财务对接</span>
                </div>
              </div>
            </div>
            <div class="card_item">
              <div class="img_con" >
                <img src="../assets/oa.png">
              </div>
              <div class="shuoming">
                <div>
                  <span style="font-size: 25px;color: #727272">OA办公</span>
                </div>
                <div>
                  <span style="font-size: 16px;color: #636363">办公公文发布、移交、流转，校园通讯录管理，校园文档多维度查询</span>
                </div>
              </div>
            </div>
            <div class="card_item">
              <div class="img_con">
                <img src="../assets/renshi.png">
              </div>
              <div class="shuoming">
                <div>
                  <span style="font-size: 25px;color: #727272">人事管理</span>
                </div>
                <div>
                  <span style="font-size: 16px;color: #636363">教职工职业信息与变更，教师职业发展，聘任管理</span>
                </div>
              </div>
            </div>
            <div class="card_item">
              <div class="img_con">
                <img src="../assets/hushi.png">
              </div>
              <div class="shuoming">
                <div>
                  <span style="font-size: 25px;color: #727272">学生发展</span>
                </div>
                <div>
                  <span style="font-size: 16px;color: #636363">学籍管理，学习分析，实习实践，校园奖励，生涯与就业</span>
                </div>
              </div>
            </div>
            <div class="card_item">
              <div class="img_con">
                <img src="../assets/jiaowu.png">
              </div>
              <div class="shuoming">
                <div>
                  <span style="font-size: 25px;color: #727272">教务管理</span>
                </div>
                <div>
                  <span style="font-size: 16px;color: #636363">班级信息管理，课程信息管理，成绩信息管理，综合信息查询</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="login_card">
          <div class="login_head">
            <span>请登录</span>
          </div>
          <div class="login">
            <div>
              <el-input
                placeholder="请输入用户名"
                prefix-icon="el-icon-user"
                v-model="input2">
              </el-input>
            </div>
            <div style="margin-top: 4%">
              <el-input
                placeholder="请输入密码"
                prefix-icon="el-icon-unlock"
                v-model="input2">
              </el-input>
            </div>
            <div style="margin-top: 4%">
              <el-button type="primary" style="width: 100%">登录</el-button>
            </div>
            <div style="margin-top: 1%;height: 5%">
              <div style="float: right">
                <el-button type="text">忘记密码</el-button>
              </div>
            </div>
          </div>
          <div class="about">
            <span>相关链接</span>
<!--            <el-divider></el-divider>-->
            <el-row style="margin-top: 3%">
              <el-col :span="8">
                <span style="font-weight: normal;font-size: 15px;cursor: pointer">人民医专校园官网</span>
              </el-col>
              <el-col :span="8">
                <span style="font-weight: normal;font-size: 15px;cursor: pointer">人民医专数字图书馆</span>
              </el-col>
              <el-col :span="8">
                <span style="font-weight: normal;font-size: 15px;cursor: pointer">人民医专财务系统</span>
              </el-col>
            </el-row>
            <el-row style="margin-top: 1%">
              <el-col :span="8">
                <span style="font-weight: normal;font-size: 15px;cursor: pointer">中华人民共和国教育部</span>
              </el-col>
              <el-col :span="8">
                <span style="font-weight: normal;font-size: 15px;cursor: pointer">中华人民共和国卫生部</span>
              </el-col>
              <el-col :span="8">
                <span style="font-weight: normal;font-size: 15px;cursor: pointer">中国高职高专教育网</span>
              </el-col>
            </el-row>
          </div>
          <div class="about">
            <span>相关下载</span>
<!--            <el-divider></el-divider>-->
            <el-row style="margin-top: 3%">
              <el-col :span="8">
                <span style="font-weight: normal;font-size: 15px;cursor: pointer">系统使用说明</span>
              </el-col>
              <el-col :span="8">
                <span style="font-weight: normal;font-size: 15px;cursor: pointer">平台服务指南</span>
              </el-col>
              <el-col :span="8">
                <span style="font-weight: normal;font-size: 15px;cursor: pointer">常见问题</span>
              </el-col>
            </el-row>
            <el-row style="margin-top: 1%">
              <el-col :span="8">
                <span style="font-weight: normal;font-size: 15px;cursor: pointer">关于我们</span>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright_container">
      <div style="text-align: center;padding-top: 25px">
        <span style="font-size: 12px;color: #727272">Copyright 中科瑞通 ©2020</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loginForm: {
        username: 'admin',
        password: '111111'
      }
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
    width: 80%;
    background-color: #ffffff;
    float: left;
    margin-left: 5%;
  }
  /*.school_logo img {*/
  /*  width: 80%;*/
  /*  height: 80%;*/
  /*  margin-top: 10%;*/
  /*}*/
  .school_title {
    height: 100%;
    width: 20%;
    float: left;
  }
   .school_title img {
    width: 90%;
    height: 100%;
    margin-top: 0%;
    margin-left: 5%;
  }
  .content {
    width: 100%;
    height: 75%;
    background-color: #30c1e5;
    background-image: url("../assets/bg.jpg");
  }
  .content_container {
    width: 100%;
    height: 100%;
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
