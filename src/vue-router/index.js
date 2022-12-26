import install, { Vue } from './install';
import createMatcher from './create-matcher';

class VueRouter {
  constructor(options = {}) {
    console.log(options);
    const routers = options.routes;
    this.mode = options.mode || 'hash';

    // 给我个路径，我就返回给你对应的记录
    // match匹配方法

    // addRoutes 动态添加路由
    this.matcher = createMatcher(options.routes || []);
  }
  init(app) {
    console.log('init');
    console.log(Vue);
  }
}
VueRouter.install = install;


export default VueRouter;