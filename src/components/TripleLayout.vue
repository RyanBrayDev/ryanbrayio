<template>
    <section>
        <div class="flex-grid-thirds">
            <div class="col"><slot name="col1"></slot></div>
            <div class="col"><slot name="col2"></slot></div>
            <div class="col"><slot name="col3"></slot></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "TripleLayout",
    }
</script>

<style scoped lang="scss">
    .flex-grid-thirds {
        display: block;
        text-align: center;
    }
    .flex-grid-thirds .col {
        width: 100%;
    }

    @media (min-width: 768px) {
        .flex-grid-thirds {
            display: flex;
            justify-content: space-between;
        }

        .flex-grid-thirds .col {
            width: 32%;
        }
    }
</style>
