import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import discussshizililiang from '@/views/modules/discussshizililiang/list'
    import shizililiang from '@/views/modules/shizililiang/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import susheanpai from '@/views/modules/susheanpai/list'
    import storeup from '@/views/modules/storeup/list'
    import kebiaoxinxi from '@/views/modules/kebiaoxinxi/list'
    import forum from '@/views/modules/forum/list'
    import jiaoshifenpei from '@/views/modules/jiaoshifenpei/list'
    import sushexinxi from '@/views/modules/sushexinxi/list'
    import luquxinxi from '@/views/modules/luquxinxi/list'
    import banjixinxi from '@/views/modules/banjixinxi/list'
    import qiandaoxinxi from '@/views/modules/qiandaoxinxi/list'
    import config from '@/views/modules/config/list'
    import zaixianjiaofei from '@/views/modules/zaixianjiaofei/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '学校公告',
        component: news
      }
      ,{
	path: '/discussshizililiang',
        name: '师资力量评论',
        component: discussshizililiang
      }
      ,{
	path: '/shizililiang',
        name: '师资力量',
        component: shizililiang
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/susheanpai',
        name: '宿舍安排',
        component: susheanpai
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/kebiaoxinxi',
        name: '课表信息',
        component: kebiaoxinxi
      }
      ,{
	path: '/forum',
        name: '论坛管理',
        component: forum
      }
      ,{
	path: '/jiaoshifenpei',
        name: '教室分配',
        component: jiaoshifenpei
      }
      ,{
	path: '/sushexinxi',
        name: '宿舍信息',
        component: sushexinxi
      }
      ,{
	path: '/luquxinxi',
        name: '录取信息',
        component: luquxinxi
      }
      ,{
	path: '/banjixinxi',
        name: '班级信息',
        component: banjixinxi
      }
      ,{
	path: '/qiandaoxinxi',
        name: '签到信息',
        component: qiandaoxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/zaixianjiaofei',
        name: '在线缴费',
        component: zaixianjiaofei
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
