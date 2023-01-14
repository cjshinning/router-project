// 路由的公共方法都放在这儿

function createRoute(record, location) {  //创建路由
  const matched = [];
  if (record) { //不停的去父级查找
    while (record) {
      matched.unshift(record);
      record = record.parent;
    }
  }
  return {
    ...location,
    matched
  }
}

export default class History {
  constructor(router) {
    this.router = router;

    // 有一个数据来保存路径的变化

    this.current = createRoute(null, {
      path: '/'
    }); // => {path: '/', matched: []}
  }

  transitionTo(path, cb) {
    let record = this.router.match(path);
    this.current = createRoute(record, {
      path
    });

    // 路径变化 需要渲染组件
    // 将current熟悉变成响应式，这样更改current就能渲染组件了
    // Vue.util.defineReactive() === defineReactive

    console.log(this.current);

    cb && cb(); //默认第一次cb是hashchange
  }

}