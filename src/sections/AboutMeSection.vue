<template>
  <div class="about-me-wrapper">
    <h2>Hi, I'm Ryan Bray.</h2>
    <h2>  I am a consultant and leader in the Denver area.  I focus on helping my clients in the areas of software development, continuous integration and deployment, and agile delivery.
    This site is intended to be an overview of my work and values.
    Feel free to reach out to me through any of the links in the footer of the page.
  </h2>
  </div>
</template>

<script>
export default {
  name: "AboutMeSection"
};
</script>


<style scoped lang="scss">
.about-me-wrapper {
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
}

h2 {
  color: #484848;
  font-size: 1.0rem;
  line-height: 2.0rem;
}

@media (min-width: 768px) {
  .about-me-wrapper {
    text-align: center;
    margin-left: 15%;
    margin-right: 15%;
  }

  h2 {
    color: #484848;
    font-size: 1.2rem;
    line-height: 2.4rem;
  }
}
</style>
