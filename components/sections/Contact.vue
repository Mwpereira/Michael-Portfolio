<template>
  <div id='contact' class='section my-6'>
    <p class='title has-text-centered'>Let's Connect</p>
    <hr>
    <div class='columns is-vcentered is-centered'>
      <div class='column'>
        <img src='/contact.svg' alt='Contact Me' width='700' />
      </div>
      <div class='column'>
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import ContactForm from '~/components/general/ContactForm.vue';

@Component({
	components: { ContactForm }
})
export default class Contact extends Vue {
}
</script>
