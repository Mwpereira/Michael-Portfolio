<template>
  <b-navbar class='box' :class="{ 'scrolled-up': showNavbar,  'scrolled-down': !showNavbar }">
    <template #brand>
      <b-navbar-item id='logo' tag='router-link' :to="{ path: '/' }">
        <svg data-v-fde0c5aa='' xmlns='http://www.w3.org/2000/svg' width='300' height='50' viewBox='100 100 100 100'
             class='iconAbove'><!---->
          <defs data-v-fde0c5aa=''><!----></defs>
          <g id='e63c07c3-44ea-48b6-a662-0950e2179306' data-v-fde0c5aa='' :fill="isDarkModeActive ? '#fff' : '#000000'"
             transform='matrix(2.5932574751666104,0,0,2.5932574751666104,16.110113787250086,163.57709909743184)'>
            <path
              d='M10.02 13.52L10.02 4.36L9.53 4.36L5.80 8.44L2.00 4.36L1.50 4.36L1.50 13.52L2.73 13.52L2.73 6.82L5.62 9.97L5.97 9.97L8.79 6.82L8.79 13.52ZM13.78 5.26C14.30 5.26 14.71 4.81 14.71 4.33C14.71 3.84 14.30 3.40 13.78 3.40C13.25 3.40 12.85 3.84 12.85 4.33C12.85 4.81 13.25 5.26 13.78 5.26ZM14.48 6.69L12.28 6.69L12.28 7.74L13.36 7.74L13.36 13.52L14.48 13.52ZM19.99 6.55C17.91 6.55 16.42 8.20 16.42 10.14C16.42 12.09 17.91 13.73 19.99 13.73C20.99 13.73 21.77 13.33 22.04 13.06L22.04 11.92C21.52 12.30 20.90 12.63 19.99 12.63C18.53 12.63 17.58 11.47 17.58 10.14C17.58 8.82 18.53 7.64 19.99 7.64C20.90 7.64 21.52 7.97 22.04 8.35L22.04 7.22C21.77 6.96 20.99 6.55 19.99 6.55ZM27.23 6.55C26.30 6.55 25.43 7.23 25.01 7.77L25.01 3.68L23.88 3.68L23.88 13.52L25.01 13.52L25.01 8.98C25.55 8.27 26.32 7.64 27.04 7.64C28.12 7.64 28.63 8.29 28.63 9.46L28.64 13.52L29.76 13.52L29.76 9.35C29.76 7.46 28.63 6.55 27.23 6.55ZM34.70 6.55C32.83 6.55 31.40 7.96 31.40 10.21C31.40 12.29 32.83 13.73 34.59 13.73C35.63 13.73 36.46 13.08 36.94 12.36L36.94 13.52L38.06 13.52L38.06 6.69L36.94 6.69L36.94 7.60C36.35 6.95 35.48 6.55 34.70 6.55ZM34.90 7.64C35.74 7.64 36.35 8.07 36.93 8.78L36.94 10.09C36.96 11.55 36.01 12.63 34.77 12.63C33.44 12.63 32.57 11.54 32.57 10.21C32.57 8.89 33.44 7.64 34.90 7.64ZM46.35 9.87C46.35 8.00 45.31 6.55 43.20 6.55C41.28 6.55 39.91 8.20 39.91 10.14C39.91 12.09 41.40 13.73 43.48 13.73C44.54 13.73 45.25 13.26 45.53 12.99L45.53 11.85C45.08 12.18 44.46 12.63 43.48 12.63C42.16 12.63 41.26 11.69 41.10 10.54L46.35 10.54ZM41.13 9.58C41.32 8.50 42.08 7.64 43.20 7.64C44.16 7.64 45.10 8.26 45.24 9.58ZM49.31 13.52L49.31 3.68L48.19 3.68L48.19 13.52ZM56.08 4.36L56.08 13.52L57.31 13.52L57.31 9.94C57.79 10.16 58.58 10.39 59.53 10.39C61.41 10.39 62.92 9.06 62.92 7.45C62.92 5.56 61.30 4.36 59.73 4.36ZM59.49 9.23C58.67 9.23 57.80 9.02 57.31 8.82L57.31 5.52L59.39 5.52C60.57 5.52 61.66 6.29 61.66 7.45C61.66 8.48 60.87 9.23 59.49 9.23ZM70.72 9.87C70.72 8.00 69.69 6.55 67.58 6.55C65.65 6.55 64.29 8.20 64.29 10.14C64.29 12.09 65.78 13.73 67.85 13.73C68.92 13.73 69.63 13.26 69.90 12.99L69.90 11.85C69.45 12.18 68.84 12.63 67.85 12.63C66.54 12.63 65.64 11.69 65.47 10.54L70.72 10.54ZM65.50 9.58C65.69 8.50 66.46 7.64 67.58 7.64C68.54 7.64 69.48 8.26 69.62 9.58ZM75.80 6.55C75.02 6.55 74.21 7.15 73.69 8.05L73.69 6.69L72.57 6.69L72.57 13.52L73.69 13.52L73.69 9.39C74.20 8.48 74.70 7.72 75.63 7.72C75.99 7.72 76.34 7.86 76.63 8.08L76.63 6.74C76.38 6.62 76.11 6.55 75.80 6.55ZM84.03 9.87C84.03 8.00 82.99 6.55 80.88 6.55C78.96 6.55 77.59 8.20 77.59 10.14C77.59 12.09 79.08 13.73 81.16 13.73C82.22 13.73 82.93 13.26 83.21 12.99L83.21 11.85C82.76 12.18 82.14 12.63 81.16 12.63C79.84 12.63 78.94 11.69 78.78 10.54L84.03 10.54ZM78.80 9.58C79.00 8.50 79.76 7.64 80.88 7.64C81.84 7.64 82.78 8.26 82.92 9.58ZM86.97 5.26C87.49 5.26 87.90 4.81 87.90 4.33C87.90 3.84 87.49 3.40 86.97 3.40C86.43 3.40 86.04 3.84 86.04 4.33C86.04 4.81 86.43 5.26 86.97 5.26ZM87.66 6.69L85.46 6.69L85.46 7.74L86.54 7.74L86.54 13.52L87.66 13.52ZM93.31 6.55C92.53 6.55 91.72 7.15 91.21 8.05L91.21 6.69L90.08 6.69L90.08 13.52L91.21 13.52L91.21 9.39C91.71 8.48 92.22 7.72 93.15 7.72C93.50 7.72 93.86 7.86 94.14 8.08L94.14 6.74C93.90 6.62 93.63 6.55 93.31 6.55ZM98.40 6.55C96.52 6.55 95.10 7.96 95.10 10.21C95.10 12.29 96.52 13.73 98.29 13.73C99.33 13.73 100.16 13.08 100.64 12.36L100.64 13.52L101.76 13.52L101.76 6.69L100.64 6.69L100.64 7.60C100.05 6.95 99.18 6.55 98.40 6.55ZM98.60 7.64C99.44 7.64 100.05 8.07 100.63 8.78L100.64 10.09C100.65 11.55 99.71 12.63 98.46 12.63C97.14 12.63 96.26 11.54 96.26 10.21C96.26 8.89 97.14 7.64 98.60 7.64Z'></path>
          </g>
          <defs data-v-fde0c5aa=''>
            <linearGradient id='aed0865b-04d4-4f36-a5fe-e80297b97c92' data-v-fde0c5aa='' gradientTransform='rotate(25)'
                            x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop data-v-fde0c5aa='' offset='0%' stop-color='#EA1F59' stop-opacity='1'></stop>
              <stop data-v-fde0c5aa='' offset='100%' stop-color='#FA9169' stop-opacity='1'></stop>
            </linearGradient>
          </defs>
          <g id='abf09a13-fd45-4e2a-96f3-628fb2ab0e9e' data-v-fde0c5aa='' stroke='none'
             fill='url(#aed0865b-04d4-4f36-a5fe-e80297b97c92)'
             transform='matrix(0.6088261254686645,0,0 ,0.6088261254686645,119.55869372656677,97.16451896625615)'>
            <path
              d='M41.751 59.098v6.119L20 55.789v-5.232l21.751-9.427v6.162l-15.156 5.839 15.156 5.967zM55.2 41l-6.055 24.93a30.668 30.668 0 0 1-.529 1.946c-.151.476-.382.849-.691 1.112-.31.268-.761.4-1.352.4-1.47 0-2.206-.636-2.206-1.902 0-.332.145-1.16.433-2.486l6.033-24.93c.317-1.326.619-2.234.907-2.724.289-.49.851-.735 1.688-.735.721 0 1.271.173 1.653.519.382.346.573.822.573 1.427 0 .447-.152 1.261-.454 2.443zM80 55.789L58.249 65.26v-6.119l15.2-5.967-15.2-5.882v-6.076L80 50.6v5.189z'></path>
            <path
              d='M94 6H6a6 6 0 0 0-6 6v76a6 6 0 0 0 6 6h88a6 6 0 0 0 6-6V12a6 6 0 0 0-6-6zm-15 4c2.205 0 4 1.794 4 4s-1.795 4-4 4-4-1.794-4-4 1.795-4 4-4zm-11 0c2.205 0 4 1.794 4 4s-1.795 4-4 4-4-1.794-4-4 1.795-4 4-4zm26 78H6V22h88v66zm-4-70c-2.205 0-4-1.794-4-4s1.795-4 4-4 4 1.794 4 4-1.795 4-4 4z'></path>
          </g><!----></svg>
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item href='#about' rel='noopener'>
        About
      </b-navbar-item>
      <b-navbar-item href='#work' rel='noopener'>
        Experience
      </b-navbar-item>
      <b-navbar-item href='#projects' rel='noopener'>
        Projects
      </b-navbar-item>
      <b-navbar-item href='#contact' rel='noopener' class='mr-4'>
        Contact
      </b-navbar-item>
      <a id='darkModeToggle' class='navbar-item has-divider is-desktop-icon-only is-size-6' title='Dark Mode'
         @click='darkModeToggle'>
        <div v-if='!isDarkModeActive'>
          <i class='far fa-moon'></i>
        </div>
        <div v-else>
          <i id='sun' class='far fa-sun'></i>
        </div>
      </a>
    </template>
  </b-navbar>
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component
export default class NavBar extends Vue {
  private showNavbar = true
  private lastScrollPosition = 0

  get isDarkModeActive(): boolean {
    return this.$store.getters.isDarkModeActive
  }

  darkModeToggle() {
    this.$store.commit('DARKMODE_TOGGLE')
  }

  mounted() {
    window.addEventListener('scroll', this.onScroll)
  }

  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    if (currentScrollPosition < 0) {
      return
    }
    if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
      return
    }
    this.showNavbar = currentScrollPosition < this.lastScrollPosition
    this.lastScrollPosition = currentScrollPosition
  }
}
</script>

<style scoped>
.navbar {
  padding: 1rem 2rem 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.navbar-item {
  padding-bottom: 5px;
  margin-left: 2px;
  margin-right: 2px;
  color: #323232;
}

.navbar-item:focus {
  color: #323232;
}

.navbar-item:hover {
  color: #323232;
  border-bottom: 2px solid #323232;
}

.navbar-menu.is-active .navbar-item:hover {
  border-color: transparent !important;
  color: #808080;
}

.scrolled-down {
  transform: translateY(-100%);
  transition: all 0.3s ease-in-out;
}

.scrolled-up {
  transform: translateY(0);
  transition: all 0.3s ease-in-out;
}

#logo:hover, #logo:focus {
  border-bottom: none;
}

#sun {
  color: white;
}

#darkModeToggle:hover {
  border-bottom: none;
  color: black;
}

@media screen and (max-width: 768px) {
  svg {
    width: 150px;
  }
}
</style>
