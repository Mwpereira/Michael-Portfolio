<template>
  <section>
    <Hero />
    <About />
    <Jobs />
    <Projects />
    <Certifications />
    <Contact />
    <Socials class='is-hidden-mobile' />
    <Email class='is-hidden-mobile' />
  </section>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import Hero from '~/components/sections/Hero.vue';
import Projects from '~/components/sections/Projects.vue';
import Contact from '~/components/sections/Contact.vue';
import About from '~/components/sections/About.vue';
import Jobs from '~/components/sections/Work.vue';
import Certifications from '~/components/sections/Certifications.vue';
import Socials from '~/components/general/Socials.vue';
import Email from '~/components/general/Email.vue';

@Component({
	components: {
		About,
		Certifications,
		Contact,
		Email,
		Hero,
		Jobs,
		Projects,
		Socials,
	}
})
export default class HomePage extends Vue {
	mounted() {
		this.$store.commit('loadTheme');
	}
}
</script>

<style>
* {
  font-family: 'Noto Sans JP', sans-serif;
}

html {
  scroll-behavior: smooth;
  scroll-padding: 75px 0 0 50px;
}

html, body {
  overflow-x: hidden;
}

p, i {
  color: #323232;
}

@media screen and (max-width: 1100px) {
  Socials, Email {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  p.title {
    font-size: 1.75rem;
  }
}
</style>
