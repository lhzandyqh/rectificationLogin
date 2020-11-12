<template>
  <div class="appContainer">
    <el-popover
      placement="bottom"
      width="200"
      trigger="hover">
      <div class="content">
        <span style="font-weight: bolder">当前用户：</span>
        <span style="font-weight: bolder">rmyzAdmin</span>
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
            <i class="el-icon-open"></i>
          </div>
          <div class="functionTitle">
            <el-button type="text" @click="logout">退出登录</el-button>
          </div>
        </div>
      </div>
      <i class="el-icon-s-custom" style="color: #121212" slot="reference"></i>
    </el-popover>
  </div>
</template>

<script>
// import {verifyLogin } from '@/api/login'
export default {
  name: 'userSettingPopover',
  methods: {
    gotoTeacher: function () {

    },
    logout: function () {
      this.$emit('tuichu')
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
