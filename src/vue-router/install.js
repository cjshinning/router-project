export let Vue;
import RouterLink from './components/link';
import RouterView from './components/view';

export default function install(_Vue) {
  Vue = _Vue;

  // 给所有的组件统一增加$router和$route属性
  Vue.mixin({ //_router 共享给每个人的
    beforeCreate() {
      // vuex 父 store 子 拿父store 孙子 拿子的store
      // 我给跟实例加一个_router属性
      // 所有人都拿到跟上的_router
      if (this.$options.router) {
        // 根组件
        this._router = this.$options.router;
        this._routerRoot = this;

        // 初始化路由逻辑，只初始化一次
        this._router.init(this);  //整个应用的跟
      } else {
        // 子组件
        this._routerRoot = this.$parent && this.$parent._routerRoot;
      }
      // 所有组件都有_routerRoot._router获取路由实例
    }
  })

  // _routerRoot 是跟实例，跟实例上有_router属性
  // 所有组件都可以获取跟_routerRoot，获取跟的属性_router
  Object.defineProperty(Vue.prototype, '$router', {
    get() {

    }
  })
  Object.defineProperty(Vue.prototype, '$route', {
    get() {

    }
  })

  Vue.component('router-link', RouterLink);
  Vue.component('router-view', RouterView);
}