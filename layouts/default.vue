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
import { Vue } from "vue-property-decorator";
import Component from "vue-class-component";
import NavBar from '~/components/general/NavBar.vue'
import Footer from '~/components/general/Footer.vue'

@Component({
  components: { NavBar, Footer },
})
export default class Hero extends Vue {}
</script>
