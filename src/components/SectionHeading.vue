<template>
  <div class="section-heading">
    <div class="header-container">
      <h2>
        <slot></slot>
      </h2>
    </div>
    <slot name="summary" id="section-summary"></slot>
  </div>
</template>

<!--<script>-->
<!--export default {-->
<!--name: "SectionHeading"-->
<!--}-->
<!--</script>-->

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

  .section-heading {
    font-family: 'Josefin Sans', sans-serif;
    width: 100%;
  }

  .header-container {
    width: 300px;
    margin: 0 auto;
  }

  h2 {
    font-size: 2em;
    text-align: center;
    padding-bottom: 10px;
  }

  #section-summary {
    font-size: 1em;
    color: #7f828b;
  }


</style>
