<template>
    <div>
        <hero-section></hero-section>
        <section-container :isAlternate=true>
            <about-me-section></about-me-section>
        </section-container>
        <section-container>
            <roles-section></roles-section>
        </section-container>
        <section-container :isAlternate=true>
            <values-section></values-section>
        </section-container>
        <section-container>
            <capabilities-section></capabilities-section>
        </section-container>
        <section-container :isAlternate=true>
            <contact-me-section></contact-me-section>
        </section-container>
        <footer-section></footer-section>
    </div>
</template>

<script>
    import AboutMeSection from "./sections/AboutMeSection";
    import ValuesSection from "./sections/ValuesSection";
    import CapabilitiesSection from "./sections/CapabilitiesSection";
    import ContactMeSection from "./sections/ContactMeSection";
    import HeroSection from "./sections/HeroSection";
    import RolesSection from "./sections/RolesSection";
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import SectionContainer from "./components/SectionContainer";
    import FooterSection from "./sections/FooterSection";

    export default {
        name: 'app',
        components: {
            FooterSection,
            SectionContainer,
            CapabilitiesSection,
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
