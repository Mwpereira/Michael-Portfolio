<template>
    <section class="box p-5">
        <form class="form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />

            <b-field label="Name">
                <b-input placeholder="name" type="text" name="Name" required />
            </b-field>

            <b-field label="Email" class="mt-5 mb-5">
                <b-input placeholder="email" type="email" name="Email" required />
            </b-field>

            <b-field label="Message" class="mb-1">
                <b-input maxlength="250" type="textarea" name="Message" placeholder="message" required />
            </b-field>

            <button class="button is-dark">Send Message</button>
        </form>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class ContactForm extends Vue {}
</script>
