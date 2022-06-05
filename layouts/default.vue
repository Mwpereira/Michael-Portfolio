<template>
  <div>
   <NavBar />
    <section class="main-content columns">
      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import NavBar from '~/components/general/NavBar.vue';
import Footer from '~/components/general/Footer.vue';

@Component({
	components: { Footer, NavBar },
})
export default class Hero extends Vue {}
</script>
