<template>
    <div id="projects" class="section my-6">
        <p class="title">Certifications</p>
        <hr />
        <div class="columns is-vcentered is-multiline mb-6">
            <div
                v-for="certificate in certificates"
                :key="certificate.title"
                class="column is-half is-full-mobile"
            >
                <CertificationCard
                    :title="certificate.title"
                    :credential-id="certificate.credentialId"
                    :date-issued="certificate.dateIssued"
                    :provider="certificate.provider"
                    :link="certificate.link"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import CertificationCard from '~/components/general/CertificationCard.vue'
import certificates from '@/content/json/certifications.json'

@Component({
    components: { CertificationCard },
})
export default class Certifications extends Vue {
    public providers = ['Udemy', 'LinkedIn']
    public certificates = certificates
}
</script>

<style scoped>
i {
    margin-right: 5px;
}
</style>
