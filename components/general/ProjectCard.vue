<template>
  <div class='card'>
    <div class='card-content'>
      <div class='content'>
        <p class='has-text-weight-bold is-size-5 card-desc'>
          {{ project }}
        </p>
        <p id='desc' class='card-desc'>
          {{ desc }}
        </p>
      </div>
      <div class='mt-5 mb-2'>
        <b-tag v-for="tag in tags.split(' ')" id='tags' :key='tag' type='is-dark'>
          {{ tag }}
        </b-tag>
      </div>
    </div>
    <footer class='card-footer is-size-5'>
      <div class='card-footer-item'>
        <a id='github' :href='github' rel='noopener' target='_blank'>
          <i class='fab fa-github'></i>
        </a>
      </div>
      <div v-if='link' class='card-footer-item'>
        <a id='link' :href='link' rel='noopener' target='_blank'>
          <i class='fas fa-external-link-alt'></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'
import { Prop } from 'nuxt-property-decorator'

@Component
export default class ProjectCard extends Vue {
  @Prop()
  public project!: string

  @Prop()
  public desc!: string

  @Prop()
  public tags!: string

  @Prop()
  public github!: string

  @Prop()
  public link!: string
}
</script>

<style scoped>
i:hover {
  color: #908d90;
}

.card:hover {
  transform: scale(1.025);
}

.tag {
  margin-right: 5px;
}

.card-desc {
  line-height: 16px;
}

#desc {
  font-size: 14px;
}

#tags {
  font-size: 12px;
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
