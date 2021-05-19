/*
 * @Author: kim
 * @Date: 2021-04-03 10:49:59
 * @LastEditors: kim
 * @LastEditTime: 2021-04-30 19:55:07
 * @FilePath: /derify-finance/src/router/index.js
 */
import Vue from "vue";
import Router from "vue-router";
import routes from "./routers";

Vue.use(Router);
const router = new Router({
  routes,
  mode: "history",
  base: "/",
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    } else {
      return {
        x: 0,
        y: 0,
      };
    }
  },
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
