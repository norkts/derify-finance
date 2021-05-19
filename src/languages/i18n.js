/*
 * @Author: kim
 * @Date: 2021-04-02 13:31:01
 * @LastEditors: kim
 * @LastEditTime: 2021-04-02 14:49:17
 * @FilePath: /orbits-app/src/languages/i18n.js
 */

import Vue from "vue";
import VueI18n from "vue-i18n";
import messages from "./langs";
import store from '@/store'
Vue.use(VueI18n);
//从localStorage中拿到用户的语言选择，如果没有，那默认中文。
const i18n = new VueI18n({
  locale: store.getters.lang || "en",
  messages,
  silentTranslationWarn: true,
});

export default i18n;
