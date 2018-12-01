<template>
    <TripleLayout>
        <div slot="col1">
            <font-awesome-icon icon="building"/>
            <h3>Architecture</h3>
            <p>Complex business problems require experienced technical decision making. Through
                communication and collaboration, I will help make decisions that drive customer value today
                and well into the future.</p></div>
        <div slot="col2">
            <font-awesome-icon icon="graduation-cap"/>
            <h3>Coaching</h3>
            <p>I strive to be a multiplier. As a leader, my goal is to increase the amplify and multiply
                the success of the people on the team. By empowering others, we can increase velocity by levelling up
                the game of everyone on the team.</p></div>
        <div slot="col3">
            <font-awesome-icon icon="truck"/>
            <h3>Delivery</h3>
            <p>Delivery is about driving value to the customer as fast as possible. I believe in failing fast and
                shortening the feedback loop. Combining agile principals with
                continuous integration and continuous delivery, we can deliver value faster than ever before.</p></div>
    </TripleLayout>
</template>

<script>

    import TripleLayout from "./TripleLayout";

    export default {
        name: "RolesSection",
        components: {
            TripleLayout
            //SectionHeading
        },
    }
</script>

<style scoped lang="scss">

</style>