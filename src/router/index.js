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
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'dashboard', icon: 'dashboard', affix: true }
    }]
  },

  {
    path: '/',
    component: Layout,
    redirect: '/detection',
    children: [
      {
        path: 'detection',
        name: 'Detection',
        component: () => import('@/views/detection/index'),
        meta: { title: 'detection', icon: 'el-icon-s-platform' }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/detection2',
    children: [
      {
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
        path: 'monitoring',
        name: 'Monitoring',
        component: () => import('@/views/monitoring/index'),
        meta: { title: 'monitoring', icon: 'form' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]
export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
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
        path: 'management2',
        name: 'Management2',
        component: () => import('@/views/management2/index'),
        meta: { title: 'management2', icon: 'tree', roles: ['superadmin'] }
      }
    ]
  },
  {
    path: '/assessment',
    component: Layout,
    name: 'Assessment',
    meta: {
      title: 'assessment',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'),
        name: 'Menu1',
        meta: { title: 'menu1' }
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },
  {
    path: 'link',
    component: Layout,
    children: [
      {
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

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
