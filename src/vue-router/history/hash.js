import History from './base';

function ensureHash() {
  if (!window.location.hash) {
    window.location.hash = '/';
  }
}

function getHash() {
  return window.location.hash.slice(1);
}

export default class Hash extends History {
  constructor(router) {
    super(router);
    // console.log(this.router)

    // hash路由初始化时，需要默认加一个hash值 /#/
    ensureHash();
  }
  getCurrentLocation() {
    return getHash();
  }
  setUpListener() {
    window.addEventListener('hashchange', () => {
      // hash值变化 再去切换组件 路径
      this.transitionTo(getHash());
    })
  }
}