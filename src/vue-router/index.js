import install, { Vue } from './install';
import { createMatcher } from './create-matcher';
import Hash from './history/hash';
import HTML5History from './history/h5';

class VueRouter {
  constructor(options = {}) {
    // console.log(options);
    const routers = options.routes;
    this.mode = options.mode || 'hash';

    // 给我个路径，我就返回给你对应的记录
    // match匹配方法
    // addRoutes 动态添加路由
    this.matcher = createMatcher(options.routes || []);

    // 根据模式需要初始化不同的路由系统 hash/history
    // 底层实现不一样，但是使用的方式是一样的
    // hash => hash.js => push
    // history => history.js => push
    // base

    // 每次调整，我需要获取当前的路径

    switch (this.mode) {
      case 'hash':  //location.hash => push
        this.history = new Hash(this);
        break;
      case 'history': //pushState => push
        this.history = new HTML5History(this);
        break;
    }
  }
  match(location) {
    return this.matcher.match(location);
  }
  init(app) {
    const history = this.history;
    // hash -> hashChange 但是浏览器支持popstate 就优先采用popstate
    // history -> popstate  性能高于hashChange 但是有兼容性问题

    // 页面初始化完毕后 需要先进行一次跳转

    // 跳转到某个路径
    const setUpListener = () => {
      // 此实现方式也不一致
      // ...
      history.setUpListener();
    }

    history.transitionTo(
      history.getCurrentLocation(),   //各自的获取路径的方法
      setUpListener
    );
  }
}
VueRouter.install = install;


export default VueRouter;