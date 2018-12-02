<template>
    <TripleLayout>
        <div slot="col1">
            <font-awesome-icon icon="building"/>
            <h3>Architect</h3>
            <p>Complex business problems require experienced technical decision making. Through communication and
                collaboration, I will help make decisions that drive customer value today and well into the future.</p>
        </div>
        <div slot="col2">
            <font-awesome-icon icon="lightbulb"/>
            <h3>Thought Leader</h3>
            <p>A thought leader is an individual that is recognized as an authority in a specialized field and who
                expertise is sought and often rewarded.
                I strive to guide technical direction, fuel technical growth and cultivate new ideas and practices.</p>
        </div>
        <div slot="col3">
            <font-awesome-icon icon="graduation-cap"/>
            <h3>Coach and Mentor</h3>
            <p>I strive to be a multiplier. As a leader, my goal is to increase the productivity by amplifying
                the success of others on the team. By empowering others, we can increase velocity by levelling up
                the game of everyone on the team.</p></div>
    </TripleLayout>
</template>

<script>

    import TripleLayout from "../components/TripleLayout";

    export default {
        name: "RolesSection",
        components: {
            TripleLayout
        },
    }
</script>

<style scoped lang="scss">

</style>