<template>
  <div class="about-me-wrapper">
    <h2>
      I am a consultant and leader in the Denver area with a particular interest in how software design supports developer productivity and happiness.
      I work for a technical consulting firm called Slalom as a Solution Principal. This site is intended to be an overview of my work and values.
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
  font-size: 1.2rem;
  line-height: 2.4rem;
}

@media (min-width: 768px) {
  .about-me-wrapper {
    text-align: center;
    margin-left: 15%;
    margin-right: 15%;
  }

  h2 {
    color: #484848;
    font-size: 1.5rem;
    line-height: 3rem;
  }
}
</style>
