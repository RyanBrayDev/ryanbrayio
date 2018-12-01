<template>
  <section  data-aos="zoom-in">
    <section-heading>
      <template slot="summary">Contact me if you like</template>
    </section-heading>
    <ul>
      <li><font-awesome-icon icon="linkedin"/>LinkedIn</li>
      <li>Facebook</li>
    </ul>
    <img src="../assets/images/avatar.jpg" height="200px">
  </section>
</template>

<script>
  import SectionHeading from './SectionHeading.vue'

  export default {
    name: "ContactMeSection",
    components: {
      SectionHeading
    }
  }
</script>

<style scoped>
  section {
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

</style>
