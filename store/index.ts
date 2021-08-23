import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => {
  return {
    isDarkModeActive: localStorage.getItem('mwpereira::darkMode') === 'true'
  }
}

export const mutations = {
  DARKMODE_TOGGLE: (state: { isDarkModeActive: boolean }) => {
    state.isDarkModeActive = !state.isDarkModeActive

    mutations.UPDATE_THEME(state)

    localStorage.setItem('mwpereira::darkMode', String(state.isDarkModeActive))
  },
  LOAD_THEME: (state: { isDarkModeActive: boolean }) => {
    state.isDarkModeActive = localStorage.getItem('mwpereira::darkMode') === 'true';

    mutations.UPDATE_THEME(state)
  },
  UPDATE_THEME: (state: { isDarkModeActive: any }) => {
    const htmlClassName = 'is-dark-mode-active'

    if (state.isDarkModeActive) {
      document.documentElement.classList.add(htmlClassName)
    } else {
      document.documentElement.classList.remove(htmlClassName)
    }
  }
}

export const getters = {
  isDarkModeActive: (state: { isDarkModeActive: boolean; }) => state.isDarkModeActive
}
