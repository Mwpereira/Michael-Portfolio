<template>
    <div class="box p-5">
        <p class="has-text-weight-bold is-size-5">
            {{ school }}
        </p>
        <p class="mt-2 mb-3">{{ location }}</p>
        <p class="card-desc desc">
            {{ major }}, {{ degree }}
            <hr>
            Date of Graduation: {{ graduation }}
        <br>
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class EducationCard extends Vue {
    @Prop()
    public school!: string

    @Prop()
    public location!: string

    @Prop()
    public degree!: string

    @Prop()
    public major!: string
    
    @Prop()
    public graduation!: string
}
</script>

<style scoped>
button {
    font-size: 14px;
}
</style>
