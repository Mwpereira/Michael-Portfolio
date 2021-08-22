<template>
  <div id='contact' class='section my-6'>
    <p class='title has-text-centered'>Let's Connect</p>
    <hr>
    <div class='columns is-vcentered is-centered'>
      <div class='column'>
<!--        <p class='is-size-5 has-text-centered' id='comment'>Thank you for checking out my website! Have any open job opportunities available that you think I would be an-->
<!--          excellent candidate for? Have any questions or would like to just say hi? My inbox is always open and I will-->
<!--          do my best to get back to you as soon as I can!</p>-->
        <img src='/contact.svg' height='500' width='600' />
      </div>
      <div class='column'>
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import ContactForm from '~/components/general/ContactForm.vue'

@Component({
  components: { ContactForm }
})
export default class Contact extends Vue {
}
</script>

<style scoped>
#comment {
  line-height: 600px;
}
</style>
