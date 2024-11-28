<template>
    <div id="email" class="section is-size-6">
        <a class="mb-5" href="mailto:mwpereira07@gmail.com" target="_blank" rel="noopener"
            >mwpereira07@gmail.com/a
        >
        <div class="vertical" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Email extends Vue {}
</script>

<style scoped>
#email {
    position: fixed;
    bottom: 0;
    right: 0px;
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
}

.vertical {
    border-left: 4px solid #202020;
    height: 48px;
    position: absolute;
    right: 50%;
    bottom: 0;
}

a {
    color: #202020;
}

a:hover {
    color: #908d90;
}
</style>
