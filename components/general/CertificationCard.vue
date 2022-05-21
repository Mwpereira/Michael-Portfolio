<template>
  <div class='card'>
    <div class='card-content'>
      <div class='content'>
        <p class='has-text-weight-bold is-size-5 card-desc'>
          {{ title }}
        </p>
        <p class='card-desc desc'>
          Credential ID: {{ credentialId }}
        </p>
        <p class='card-desc desc'>
          {{ dateIssued }} by <b> {{ provider }} </b>
        </p>
      </div>
    </div>
    <footer class='card-footer is-size-5'>
      <div v-if='link' class='card-footer-item'>
        <a id='link' :href='link' rel='noopener' target='_blank'>
          <i class='fas fa-external-link-alt'></i>
        </a>
      </div>
    </footer>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class CertificationTab extends Vue {
  @Prop()
	public title!: string;

  @Prop()
  public dateIssued!: string;

  @Prop()
  public provider!: string;

  @Prop()
  public credentialId!: string;

  @Prop()
  public link!: string;
}
</script>

<style scoped>
i:hover {
  color: #908d90;
}

.card:hover {
  transform: scale(1.025);
}

.card-desc {
  line-height: 20px;
}

.desc {
  font-size: 14px;
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
