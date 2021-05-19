/*
 * @Author: kim
 * @Date: 2021-04-02 13:52:07
 * @LastEditors: kim
 * @LastEditTime: 2021-04-30 19:53:41
 * @FilePath: /derify-finance/src/store/modules/app.js
 */

const state = {
  lang: localStorage.getItem("LANGUAGE") || "en",
  aside: false,
};
const mutations = {
  setLangInstance(state, lang) {
    state.lang = lang;
    localStorage.setItem("LANGUAGE", lang);
  },
  setAsideInstance(state) {
    state.aside = !state.aside;
  },
};

const actions = {
  setLang({ commit }, lang) {
    commit("setLangInstance", lang);
  },
  setAside({ commit }) {
    commit("setAsideInstance");
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
