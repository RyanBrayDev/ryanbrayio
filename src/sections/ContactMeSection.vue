<template>
  <section data-aos="zoom-in">
    <section-heading>Contact me</section-heading>
    <img src="../assets/images/avatar.jpg" height="200px" alt="Ryan Bray">
    <ul>
      <li><a href="https://www.linkedin.com/in/ryanbraydev/" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" class="fa-2x"/></a></li>
      <li><a href="https://www.facebook.com/ryan.bray.982" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }" class="fa-2x"/></a></li>
      <li><a href="https://twitter.com/RyanBrayDev" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" class="fa-2x"/></a></li>
      <li><a href="https://github.com/RyanBrayDev" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" class="fa-2x"/></a></li>
    </ul>
  </section>
</template>

<script>
  import SectionHeading from '../components/SectionHeading.vue'

  export default {
    name: "ContactMeSection",
    components: {
      SectionHeading
    }
  }
</script>

<style scoped lang="scss">
  section {
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li{
      display:inline;
      padding: 0 10px;
      heigh: 20px;

      a{
        color: inherit;
      }
    }
  }

  img{
    box-shadow: 2px 5px 5px rgba(0,0,0,.24), 0 0 2px rgba(0,0,0,.12);
    border-radius: 5px;
  }

</style>
