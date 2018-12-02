<template>
    <section>
        <section-heading>Capabilities</section-heading>
        <project-overview :imageUrl="developmentImage" data-aos="fade-in">
            <template slot="title">Application Development</template>
            <template slot="summary">Create and deploy modern applications on the web. I specialize in E-Commerce,
                Customer Portals, and Device Management web applications. Examples in my portfolio include credit card
                processing and e-commerce applications for a major ski resort company, the customer web portal for a
                major telecommunications company reaching millions of customers a day, and device management software
                and KPI dashboards for a global medical device company specializing in blood donations and apheresis.
            </template>
        </project-overview>
        <project-overview :imageUrl="cloudImage" data-aos="fade-in">
            <template slot="title">Cloud and DevOps</template>
            <template slot="summary">Manage your infrastructure in the cloud and move faster than ever before through
                continuous integration and continuous delivery. Continuous integration is a
                practice where members of a team integrate frequently, verified by an automatic build and test process
                while continuous deployment automates the steps for deploying code so that production code
                is updates more frequently. By using CI/CD effectively, we can increase deployment frequency from weekly
                or monthly to hourly. We can decrease time to market from 16 months to 1-7 days. We can also decrease
                change failure rate from 40-60% to 0-15%.
            </template>
        </project-overview>
        <project-overview :imageUrl="agileImage" data-aos="fade-in">
            <template slot="title">Agile Delivery</template>
            <template slot="summary">Create and deliver features to customers fast. Reduce time to market, increase
                planning accuracy, and maximize team collaboration. Delivery is about driving value to the customer as
                fast as possible. I believe in failing fast and shortening the feedback loop. Combining agile principals
                with continuous integration and continuous delivery, we can deliver value faster than ever before.
            </template>
        </project-overview>
    </section>
</template>

<script>
    import SectionHeading from '../components/SectionHeading.vue'
    import ProjectOverview from '../components/ProjectOverview.vue';

    import CloudImage from '../assets/images/cloud.jpg';
    import DevelopmentImage from '../assets/images/development.jpg';
    import AgileImage from '../assets/images/agile.jpg';

    export default {
        name: "CapabilitiesSection",
        components: {
            SectionHeading,
            ProjectOverview
        },
        data() {
            return {
                cloudImage: CloudImage,
                developmentImage: DevelopmentImage,
                agileImage: AgileImage,
            }
        },
    }
</script>

<style scoped lang="scss">

</style>
