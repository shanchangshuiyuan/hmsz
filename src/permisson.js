import router from '@/router//index'
import store from '@/store/index'

const whiteList = ['/login', '404'];

router.beforeEach((to, from, next)=>{
    
    const token = store.state.user.token;
    
    if(token){
        // 有token
        if(to.path === '/login') { //有token并且访问登录页 跳转到首页
            next('/');
        } else { //有token并且访问登录页 可继续执行
            next();
        }
    } else {
        //无token
        if(whiteList.includes(to.path)){ // 无token 并且访问 白名单页 可访问
            next();
        } else {  //无token 并且访问不是白名单页 跳转到登录页
            next('/login');
        }
    }
})