import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => {
  return {
    isDarkModeActive: false
  }
}

export const mutations = {
  DARKMODE_TOGGLE: (state: { isDarkModeActive: boolean }) => {
    state.isDarkModeActive = localStorage.getItem('mwpereira::darkMode') === 'true';
    state.isDarkModeActive = !state.isDarkModeActive

    localStorage.setItem('mwpereira::darkMode', String(state.isDarkModeActive))

    mutations.UPDATE_THEME(state)
  },
  LOAD_THEME: (state: { isDarkModeActive: boolean }) => {
    state.isDarkModeActive = localStorage.getItem('mwpereira::darkMode') === 'true';

    console.log("state")
    console.log(localStorage.getItem('mwpereira::darkMode'))
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
