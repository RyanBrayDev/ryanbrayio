<template>
  <section v-bind:class="{ alternate: isAlternate }">
    <div class="container" >
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: "SectionContainer",
    props: {
      isAlternate: {
        default: false,
        type: Boolean
      }
    }
  }
</script>

<style scoped lang="scss">
  section {
    width: 100%;
  }

  .container {
    padding: 30px 30px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }

  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }

  .alternate {
    background-color: whitesmoke;
  }
</style>
