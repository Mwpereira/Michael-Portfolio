import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => {
  return {
    isDarkModeActive: false
  }
}

export const mutations = {
  DARKMODE_TOGGLE: (state: any) => {
    state.isDarkModeActive = !state.isDarkModeActive

    mutations.UPDATE_THEME(state)

    localStorage.setItem('mwpereira::darkMode', state.isDarkModeActive)
  },
  INITIALIZE_STORE(state: any) {
    state.isDarkModeActive = localStorage.getItem('mwpereira::darkMode') === 'true';
  },
  LOAD_THEME: (state: any) => {
    if (localStorage.getItem('mwpereira::darkMode') === 'true') {
      state.isDarkModeActive = true
    }

    mutations.UPDATE_THEME(state)
  },
  UPDATE_THEME: (state: any) => {
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
