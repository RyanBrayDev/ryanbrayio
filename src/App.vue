<template>
    <div>
        <hero-section></hero-section>
        <section-container isAlternate=true>
            <about-me-section></about-me-section>
        </section-container>
        <section-container>
            <roles-section></roles-section>
        </section-container>
        <section-container isAlternate=true>
            <values-section></values-section>
        </section-container>
        <section-container>
            <projects-section></projects-section>
        </section-container>
        <section-container isAlternate=true>
            <contact-me-section></contact-me-section>
        </section-container>
    </div>
</template>

<script>
    import AboutMeSection from "./components/AboutMeSection";
    import ValuesSection from "./components/ValuesSection";
    import ProjectsSection from "./components/ProjectsSection";
    import ContactMeSection from "./components/ContactMeSection";
    import HeroSection from "./components/HeroSection";
    import RolesSection from "./components/RolesSection";
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import SectionContainer from "./components/SectionContainer";

    export default {
        name: 'app',
        components: {
            SectionContainer,
            ProjectsSection,
            AboutMeSection,
            ContactMeSection,
            HeroSection,
            ValuesSection,
            RolesSection,
        },
        mounted() {
            AOS.init();
        }
    }

</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Raleway');

    html, body {
        font-family: 'Raleway', sans-serif;
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: 'Raleway', sans-serif;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
