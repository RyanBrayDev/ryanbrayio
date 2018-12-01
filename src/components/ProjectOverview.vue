<template>
  <div class="project_overview">
    <img class="project_image" :src="imageUrl"/>
    <div class="project_copy">
      <h3>
        <slot name="title"></slot>
      </h3>
      <h4><slot name="company"></slot></h4>
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
    display: flex;
  }

  .project_image {
    margin: 20px;
    max-height: 150px;
    border-radius: 20px;
  }

  .project_copy {
    margin: 20px;
    flex-grow: 1;
  }

  .summary {
    display: block;
  }

</style>
