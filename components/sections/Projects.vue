<template>
  <div id='projects' class='section my-6'>
    <p class='title'>Side Projects</p>
    <hr>
    <div class='columns is-vcentered is-multiline mt-6'>
      <div v-for='project in projects' :key='project.name' class='column is-half-tablet-only is-half-desktop-only'>
        <ProjectCard :project='project.name' :desc='project.desc' :tags='project.tags' :github='project.github' :link='project.link' />
      </div>
    </div>
    <div class='my-6'>
      <p class='title'>Certifications</p>
      <hr>
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
import ProjectCard from '~/components/general/ProjectCard.vue'
import CertificationCard from '~/components/general/CertificationCard.vue'
import projects from '@/assets/json/projects.json'
import certificates from '@/assets/json/certifications.json'

@Component({
  components: { CertificationCard, ProjectCard }
})
export default class Projects extends Vue {
  public projects = projects
  public providers = ['Udemy', 'LinkedIn']
  public certificates = certificates
}
</script>

<style scoped>
.card:hover {
  transform: scale(1.025);
}

@media screen and (min-width: 1100px) {
  .card {
    min-width: 385px;
  }
}

@media screen and (max-width: 1100px) {
  .card {
    min-width: 300px;
  }
}
</style>
