<template>
  <div id='work' class='section my-6'>
    <p class='title'>Experience</p>
    <hr>
    <div v-for='place in work' :key='place.company' class='mb-6'>
      <WorkCard
:company='place.company' :position='place.position' :date-worked='place.dateWorked'
                :points='place.points' :reference-letter='place.referenceLetter' />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator';
import work from '@/content/json/work.json';
import WorkCard from '~/components/general/WorkCard.vue';

@Component({
	components: { WorkCard }
})
export default class Work extends Vue {
	public work = work;
}
</script>

<style scoped>
i {
  margin-right: 5px;
}
</style>
