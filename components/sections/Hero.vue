<template>
  <div class='hero is-fullheight'>
    <div class='hero-head section mt-6 pt-6'>
      <div class='hero-section'>
        <h3 class='mt-6 mb-5 '>Welcome, my name is</h3>
        <h1 class='title is-size-2-mobile'>Michael Pereira</h1>
        <h2 class='title is-size-2-mobile'>I innovate for the web.</h2>
        <div class='columns'>
          <div class='column is-5-fullhd is-6-widescreen is-7-desktop is-8-tablet is-12-mobile'>
            <p class='is-size-6 mt-5'>I am an enthusiastic full stack engineer with a passion for creating extraordinary
              software and apps. As of right now, I'm building and delivering flawless code at <b>CaseWare International
                Inc</b>.
            </p>
          </div>
        </div>
        <div class='is-grouped mt-3'>
          <a href='#contact' rel='noopener'>
            <b-button class='is-size-6 mt-3 has-text-weight-bold'>Contact Me</b-button>
          </a>
          <a href='/resume.pdf' target='_blank' rel='noopener'>
            <b-button class='is-size-6 is-dark mt-3'>Resume</b-button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component
export default class Hero extends Vue {
}
</script>

<style scoped>
h1, h2 {
  font-size: 69px;
}

h3 {
  font-size: 18px;
}

h1 {
  color: #5b5754;
  line-height: 5rem;
}

h2 {
  color: #b2b0b3;
}

.title {
  margin-bottom: 10px;
}

.hero-section {
  padding-top: 100px;
}

@media screen and (max-width: 1300px) {
  .hero-section {
    padding-top: 50px;
  }
}

@media screen and (max-width: 768px) {
  h1 {
    color: #5b5754;
    line-height: 2rem;
  }

  .hero-section {
    padding-top: 0px;
  }
}
</style>
