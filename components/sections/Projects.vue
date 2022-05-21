<template>
  <div id='projects' class='section my-6'>
    <p class='title'>Side Projects</p>
    <hr>
    <div class='columns is-vcentered is-multiline mb-6'>
      <div v-for='project in projects' :key='project.name' class='column is-half-tablet-only is-half-desktop-only'>
        <ProjectCard
:project='project.name' :desc='project.desc' :tags='project.tags' :github='project.github'
                     :link='project.link' />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import ProjectCard from '~/components/general/ProjectCard.vue';
import projects from '@/content/json/projects.json';

@Component({
	components: { ProjectCard }
})
export default class Projects extends Vue {
	public projects = projects;
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
