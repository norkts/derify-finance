/*
 * @Author: kim
 * @Date: 2021-04-02 13:48:37
 * @LastEditors: kim
 * @LastEditTime: 2021-04-02 14:12:33
 * @FilePath: /orbits-app/src/store/ index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
import getters from "./getters";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules,
  getters,
});

export default store;
