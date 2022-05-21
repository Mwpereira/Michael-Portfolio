<template>
  <div class='box p-5'>
    <p class='is-size-5'>{{ position }} <b>@ {{ company }}</b></p>
    <p class='mt-2'>{{ dateWorked }}</p>
    <div v-for='point in points' :key='point' class='my-5'>
      <p><i class='fas fa-angle-right mr-2'></i>{{ point }}</p>
      <br />
    </div>
    <div v-if='referenceLetter' class='mb-5'>
      <a :href='referenceLetter' target='_blank' rel='noopener'>
        <b-button class='is-dark'>Reference Letter</b-button>
      </a>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class WorkCard extends Vue {
  @Prop()
	public company!: string;

  @Prop()
  public position!: string;

  @Prop()
  public dateWorked!: string;

  @Prop()
  public points!: string;

  @Prop()
  public referenceLetter!: string;
}
</script>

<style scoped>
button {
  font-size: 14px;
}
</style>
