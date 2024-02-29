import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import MyproductsView from '../views/MyproductsView.vue'
import SigninView from '../views/SigninView'
import SignupView from '../views/SignupView'
import firebase from '../Firebase'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
      path:'/products',
      name: 'products',
      component: ProductView,
      meta: { requireAuth: true}
    },
    {
      path:'/myproducts',
      name: 'myproducts',
      component:MyproductsView,
      meta: { requireAuth: true}
    },
    {
       path:'/signin',
       name:'signin',
       component:SigninView
    },
    { 
      path:'/signup',
       name:'signup',
       component:SignupView
    }
  ]
})
router.beforeEach((to,from,next)=>{

  const requireAuth = to.matched.some(x=> x.meta.requireAuth)
  const currentUser = firebase.auth().currentUser

  if(requireAuth && !currentUser){
    next('/signin')
  } else if(requireAuth && currentUser){
    next()
  } else {
    next()
  }
})

export default router
