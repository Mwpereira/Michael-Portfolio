import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = () => {
  return {
    isDarkModeActive: false
  }
}

export const mutations = {
    DARKMODE_TOGGLE: (state: any) => {
      const htmlClassName = 'is-dark-mode-active';

      state.isDarkModeActive = !state.isDarkModeActive;

      if (state.isDarkModeActive) {
        document.documentElement.classList.add(htmlClassName);
      } else {
        document.documentElement.classList.remove(htmlClassName);
      }
    }
}

export const getters = {
  isDarkModeActive: (state: { isDarkModeActive: boolean; }) => state.isDarkModeActive
}
