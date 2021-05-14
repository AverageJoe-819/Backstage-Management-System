import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'dashboard', icon: 'dashboard', affix: true }
    }]
  },

  { path: '*', redirect: '/404', hidden: true }
]
export const asyncRoutes = [

  {
    path: '/',
    component: Layout,
    children: [
      {
        powerCode: 'website',
        path: 'website',
        name: 'Website',
        component: () => import('@/views/website/index'),
        meta: { title: 'website', icon: 'el-icon-s-flag' }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        powerCode: 'detection1',
        path: 'detection1',
        name: 'Detection1',
        component: () => import('@/views/detection1/index'),
        meta: { title: 'detection1', icon: 'el-icon-s-platform' }
      }
    ]
  },

  {
    path: '/',
    component: Layout,
    children: [
      {
        powerCode: 'detection2',
        path: 'detection2',
        name: 'Detection2',
        component: () => import('@/views/detection2/index'),
        meta: { title: 'detection2', icon: 'el-icon-s-help' }
      }
    ]
  },

  {
    path: '/',
    component: Layout,
    children: [
      {
        powerCode: 'monitoring',
        path: 'monitoring',
        name: 'Monitoring',
        component: () => import('@/views/monitoring/index'),
        meta: { title: 'monitoring', icon: 'form' }
      }
    ]
  },

  {
    path: '/',
    component: Layout,
    children: [
      {
        powerCode: 'management1',
        path: 'management1',
        name: 'Management1',
        component: () => import('@/views/management1/index'),
        meta: { title: 'management1', icon: 'user', roles: ['admin', 'superadmin'] }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        powerCode: 'management2',
        path: 'management2',
        name: 'Management2',
        component: () => import('@/views/management2/index'),
        meta: { title: 'management2', icon: 'tree', roles: ['superadmin'] }
      }
    ]
  },
  {
    powerCode: 'assessment',
    path: '/assessment',
    component: Layout,
    name: 'Assessment',
    meta: {
      title: 'assessment',
      icon: 'nested'
    },
    children: [
      {
        powerCode: 'menu1',
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'),
        name: 'Menu1',
        meta: { title: 'menu1' }
      },
      {
        powerCode: 'menu2',
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },
  {
    path: 'link',
    powerCode: 'link',
    component: Layout,
    children: [
      {
        powerCode: 'csdn',
        path: 'https://www.csdn.net/',
        meta: { title: 'link', icon: 'link' }
      }
    ]
  }]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
