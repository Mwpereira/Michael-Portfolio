import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = () => {
	return {
		isDarkModeActive: false
	};
};

export const mutations = {
	darkModeToggle: (state: { isDarkModeActive: boolean }) => {
		state.isDarkModeActive = !state.isDarkModeActive;

		localStorage.setItem('mwpereira::darkMode', String(state.isDarkModeActive));

		mutations.updateTheme(state);
	},
	loadTheme: (state: { isDarkModeActive: boolean }) => {
		state.isDarkModeActive = localStorage.getItem('mwpereira::darkMode') === 'true';

		mutations.updateTheme(state);
	},
	updateTheme: (state: { isDarkModeActive: any }) => {
		const htmlClassName = 'is-dark-mode-active';

		if (state.isDarkModeActive) {
			document.documentElement.classList.add(htmlClassName);
		} else {
			document.documentElement.classList.remove(htmlClassName);
		}
	}
};

export const getters = {
	isDarkModeActive: (state: { isDarkModeActive: boolean; }) => state.isDarkModeActive
};
