<template>
    <section>
        <section-heading>My Values</section-heading>
        <ul class="values-list">
            <li data-aos="flip-up"><h3>Authenticity</h3>
                <p>Always be your true self, no matter what.</p></li>
            <li data-aos="flip-left"><h3>Collaboration and Inclusivity</h3>
                <p>Teams succeed when they work together. Silos are discouraged.</p></li>
            <li data-aos="flip-right"><h3>Family and Work Life Balance</h3>
                <p>Happy teams are successful teams. Work should enhance your life, not be an obligation.</p></li>
        </ul>
    </section>
</template>

<script>
    import SectionHeading from './SectionHeading.vue'

    export default {
        name: "ValuesSection",
        components: {
            SectionHeading
        }
    }
</script>

<style scoped lang="scss">
    .values-list {
        text-align: center;
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    li {
        padding: 10px;
    }

</style>
