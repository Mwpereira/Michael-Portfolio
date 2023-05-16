<template>
    <div class="hero is-fullheight">
        <div class="hero-head section mt-6 pt-6">
            <div class="hero-section">
                <h3 class="mt-6 mb-5">Welcome, my name is</h3>
                <h1 class="title is-size-3-mobile">Michael Pereira</h1>
                <h2 class="title is-size-3-mobile">Full Stack Developer</h2>
                <div class="columns">
                    <div class="column is-5-fullhd is-6-widescreen is-7-desktop is-8-tablet is-12-mobile">
                        <p class="is-size-6 mt-5">
                            I am an enthusiastic software engineer with a passion for creating extraordinary software
                            and apps. Right now I am developing and delivering flawless code on the
                            <b>MFI Laboratory team</b> while I am working as
                            <b>Full Stack Developer @ Ryerson University</b>.
                        </p>
                    </div>
                </div>
                <div class="is-grouped mt-3">
                    <a href="#contact" rel="noopener">
                        <b-button class="is-size-6 mt-3 has-text-weight-bold">Contact Me</b-button>
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noopener">
                        <b-button class="is-size-6 is-dark mt-3">Resume</b-button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Hero extends Vue {}
</script>

<style scoped>
h1,
h2 {
    font-size: 69px;
}

h3 {
    font-size: 18px;
}

h1 {
    color: #5b5754;
    line-height: 5rem;
}

h2 {
    color: #b2b0b3;
}

.title {
    margin-bottom: 10px;
}

.hero-section {
    padding-top: 100px;
}

@media screen and (max-width: 1500px) {
    .hero-section {
        padding-top: 50px;
    }
}

@media screen and (max-width: 1500px) {
    .hero-section {
        padding-top: 25px;
    }
}

@media screen and (max-width: 768px) {
    h1 {
        color: #5b5754;
        line-height: 2rem;
    }

    .is-size-3-mobile {
        font-size: 1.8rem !important;
    }

    .hero-section {
        padding-top: 0;
    }
}
</style>
