<template>
  <section class='box p-5'>
    <form class='form' name='contact' method='POST' data-netlify='true' data-netlify-honeypot='bot-field' netlify>
      <b-field label='Name'>
        <input class='input' placeholder='name' type='text' name='Name' />
      </b-field>

      <b-field label='Email' class='mt-5 mb-5'>
        <input class='input' placeholder='email' type='email' name='Email' />
      </b-field>

      <b-field label='Message' class='mb-1'>
        <input class='input' maxlength='250' type='textarea' name='Message' placeholder='message' />
      </b-field>

      <button class='button is-dark'>Send Message</button>
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
