<template>
  <section class='box p-5'>
    <form class='form' name='contact' method='POST'>
      <b-field label='Name'>
        <b-input placeholder='name' type='text' name='name'></b-input>
      </b-field>

      <b-field label='Email' class='mt-5 mb-5'>
        <b-input placeholder='email' type='email' name='email'></b-input>
      </b-field>

      <b-field label='Message' class='mb-1'>
        <b-input maxlength='250' type='textarea' name='message' placeholder='message'></b-input>
      </b-field>

      <b-button class='is-dark' type='submit'>Send Message</b-button>
    </form>
  </section>
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

@Component
export default class ContactForm extends Vue {
}
</script>

<style scoped>

</style>
