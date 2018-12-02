<template>
    <section><p>© {{year}} - RyanBray.io - Created by Ryan Bray</p></section>
</template>

<script>
    export default {
        name: "FooterSection",
        data() {
            return {
                year: ''
            }
        },
        mounted() {
            this.year = (new Date()).getFullYear();
        }
    }
</script>

<style scoped>
    section {
        text-align: center;
        font-size: 12px;
    }
</style>