<template>
    <div class="project_overview">
        <div class="project_image" v-bind:style="{ backgroundImage: 'url(' + imageUrl + ')' }"/>
        <div class="project_copy">
            <h3>
                <slot name="title"></slot>
            </h3>
            <h4>
                <slot name="company"></slot>
            </h4>
            <p class="summary">
                <slot name="summary"></slot>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: ['imageUrl'],
        name: "ProjectOverview"
    }
</script>

<style scoped lang="scss">
    .project_overview {
        display: block;
        text-align: center;
        margin-bottom: 50px;
    }

    .project_image {
        margin: 20px;
        border-radius: 20px;
        height: 250px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: 2px 5px 5px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);
    }

    .project_copy {
        margin: 20px;
        flex-grow: 1;
        flex-basis: 500px;
    }

    @media (min-width: 768px) {
        .project_overview {
            display: flex;
            text-align: left;
        }

        .project_image {
            width: 300px;
        }

    }

</style>
