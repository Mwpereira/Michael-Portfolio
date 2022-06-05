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

	// async fetchStars(githubLink: string): Promise<number> {
	// 	if (githubLink) {
	// 		const values = githubLink.split('/');
	// 		const username = values[3];
	// 		const repo = values[4];
	// 		const url = `https://api.github.com/repos/${username}/${repo}/stargazers`;
	// 		const response = await fetch(url);
	// 		if (!response.ok) {
	// 			return 0;
	// 		} else {
  //       const stars = (await response.json()).length;
	// 			return stars;
	// 		}
	// 	}
	// 	return 0;
	// }
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
