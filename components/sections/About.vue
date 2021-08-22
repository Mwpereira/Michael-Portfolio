<template>
  <div id='about' class='section mb-6'>
    <p class='title'>About Me</p>
    <hr>
    <div class='columns'>
      <div class='column'>
        <p class='mb-5'>Hello! My name is Michael Pereira from Toronto, Canada and I am an aspiring full stack
          engineer. I have been
          extremely interested in web development since the start of high school, when I would create websites for
          friends
          and
          family, as well as learning how client and server applications function.</p>
        <p class='mt-5 mb-5'>My primary focus involves creating and developing exceptional software with an
          modern/elegant
          design and a smooth user experience. Currently, my favourite tech stacks are the MEVN stack and Jamstack.</p>
        <p>My preferred technologies include:</p>
        <div id='technologies'>
          <p class='mt-4'>
            <i class="far fa-file-code"></i>
            <i class="fas fa-angle-right"></i>
            Typescript
            <i class="fas fa-angle-right"></i>
            Java
            <i class="fas fa-angle-right"></i>
            Vue
            <i class="fas fa-angle-right"></i>
            React
          </p>
          <p class='mt-3'>
            <i class="fab fa-medapps"></i>
            <i class="fas fa-angle-right"></i>
            AWS
            <i class="fas fa-angle-right"></i>
            Git
            <i class="fas fa-angle-right"></i>
            Figma
            <i class="fas fa-angle-right"></i>
            Linux
          </p>
          <p class='mt-3'>
            <i class="fas fa-database"></i>
            <i class="fas fa-angle-right"></i>
            MongoDB
            <i class="fas fa-angle-right"></i>
            DynamoDB
            <i class="fas fa-angle-right"></i>
            MSSQL
          </p>
        </div>
      </div>
      <div class='column has-text-centered'>
        <div class='img-container'>
          <img src='/mwp.jpg' alt='Michael Pereira'/>
        </div>
      </div>
    </div>
    <div class='my-6'>
      <p class='is-size-4 mb-5'>Certifications</p>
      <div class='columns is-vcentered is-multiline'>
        <div v-for='certificate in certificates' :key='certificate' class='column is-half-tablet-only is-half-desktop-only is-6-widescreen is-6-fullhd'>
          <CertificationCard :title='certificate.title' :credential-id='certificate.credentialId'
                             :date-issued='certificate.dateIssued' :provider='certificate.provider' :link='certificate.link' />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import CertificationCard from '~/components/general/CertificationCard.vue'
import certificates from '@/assets/json/certifications.json'

@Component({
  components: { CertificationCard }
})
export default class About extends Vue {
  public providers = ['Udemy', 'LinkedIn']

  public certificates = certificates
}
</script>

<style scoped>
i {
  margin-right: 5px;
}

img {
  border-radius: 6px;
  width: auto;
}

#technologies {
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  img {
    margin-top: 20px;
  }
}
</style>
