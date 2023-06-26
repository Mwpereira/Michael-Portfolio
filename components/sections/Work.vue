<template>
    <div id="work" class="section my-6">
        <p class="title">Experience</p>
        <hr />
        <p class="subtitle has-text-weight-normal is-italic">Work</p>
        <div v-for="place in work" :key="place.company" class="mb-6">
            <WorkCard
                :company="place.company"
                :position="place.position"
                :date-worked="place.dateWorked"
                :points="place.points"
                :reference-letter="place.referenceLetter"
            />
        </div>
        <br>
        <p class="subtitle has-text-weight-normal is-italic">Education</p>
        <div v-for="school in education" :key="school.school" class="mb-6">
            <EducationCard
                :school="school.school"
                :location="school.location"
                :degree="school.degree"
                :major="school.major"
                :graduation="school.graduation"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import work from '@/content/json/work.json'
import WorkCard from '~/components/general/WorkCard.vue'
import education from '@/content/json/education.json'
import EducationCard from '../general/EducationCard.vue';

@Component({
    components: { EducationCard, WorkCard },
})
export default class Work extends Vue {
    public work = work
    public education = education
}
</script>

<style scoped>
i {
    margin-right: 5px;
}
</style>
