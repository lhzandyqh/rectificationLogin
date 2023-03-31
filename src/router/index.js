import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import HelloWorldNoSchoolLogo from '@/components/HelloWorldNoSchoolLogo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
      // path: '/',
      // name: 'HelloWorldNoSchoolLogo',
      // component: HelloWorldNoSchoolLogo
    }
  ]
})
