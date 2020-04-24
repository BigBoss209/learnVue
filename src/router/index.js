import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import("../views/home/Home")
const Car = () => import("../views/car/Car")
const Cate = () => import("../views/cate/Cate")
const Profile = () => import("../views/profile/Profile")

Vue.use(Router)

const routes = [
  {
    path:"",
    redirect:"/home",
    meta:{
      title:"首页"
    }
  },
  {
    path:"/home",
    component:Home,
    meta:{
      title:"首页"
    }
  },
  {
    path:"/car",
    component:Car,
    meta:{
      title:"购物车"
    }
  },
  {
    path:"/cate",
    component:Cate,
    meta:{
      title:"分类"
    }
  },
  {
    path:"/profile",
    component:Profile,
    meta:{
      title:"个人"
    }
  }
]

const route = new Router({
  routes,
  mode:"history",
})

route.beforeEach((to,form,next) => {
  document.title = to.meta.title
  next()

})

export default route
