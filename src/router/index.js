import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}
let router = new Router({
    mode: 'history',
    routes: [

        {
            path: '/',
            redirect: '/index',
        },
        {
            path: '/index',
            name: '首页',
            component: () => import('@/views/index'),
            children: [
                {
                    path: '/index/main',
                    name: '考试系统',
                    component: () => import('@/views/exam/main')
                },
                {
                    path: '/index/online',
                    name: '考试系统',
                    component: () => import('@/views/exam/examonline')
                }
            ]
        },


    ]

})

router.beforeEach((to, from, next) => {
    // console.log('to:' + to.path)

    if (to.path.startsWith('/login')) {
        window.localStorage.removeItem('access-token')
        //window.localStorage.removeItem('access-user')
        next()
    } else if (to.path.startsWith('/index')) {
        next()
    }
    else if (to.path.startsWith('/myjshop')) {
        next()
    }
    else if (to.path.startsWith('/myexamonline')) {
        next()
    }
    else if (to.path.startsWith('/myblog')) {
        next()
    }
    else if (to.path.startsWith('/mytest')) {
        next()
    } else {
        let user = window.localStorage.getItem('access-token');
        if (!user) {
            next({path: '/login'})
        } else {
            next()
        }
    }
})

export default router
