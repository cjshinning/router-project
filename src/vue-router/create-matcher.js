import { createRouteMap } from './create-route-map';

export function createMatcher(routes) {
  // 路径和记录匹配 / record
  let { pathMap } = createRouteMap(routes); //创建映射表

  function match(path) {
    // 帮你去pathMap中找到对应的记录
    return pathMap[path];
  }
  function addRoutes(routes) {
    // 将新的路由添加到pathMap中
    createRouteMap(routes, pathMap);
  }

  // 面试问的 动态路由的实现 就是将新的路由插入老的路由的映射
  // addRoutes([
  //   { path: '/xxx', component: { render() { } } },
  //   { path: '/qqq', component: { render() { } } },
  // ])
  // console.log(pathMap)

  return {
    addRoutes,
    match
  }
}