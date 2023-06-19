<template>
  <section>
    <section-heading>Capabilities</section-heading>
    <project-overview :imageUrl="developmentImage" data-aos="fade-in">
      <template v-slot:title>Application Development</template>
      <!-- <template v-slot:summary>
        Create and deploy modern applications on the web. I specialize in E-Commerce,
        Customer Portals, and Device Management web applications. Examples in my portfolio include credit card
        processing and e-commerce applications for a major ski resort company, the customer web portal for a
        major telecommunications company reaching millions of customers a day, and device management software
        and KPI dashboards for a global medical device company specializing in blood donations and apheresis.
      </template> -->
      <template v-slot:summary>
      I see application development as a structured process of designing, building, testing, and deploying software applications that solve specific problems or provide specific services for users. This process starts with identifying and defining the needs of the users, followed by designing and coding the application in a suitable programming language. The developed application then undergoes rigorous testing to ensure it meets the original requirements and is free of bugs. Once validated, the application is deployed to a production environment, where it becomes available for users. The application's life cycle does not end at deployment; it requires ongoing maintenance to correct any issues, improve functionality, and adapt to changing user needs and technological advancements.
    </template>
      </project-overview>
    <project-overview :imageUrl="cloudImage" data-aos="fade-in">
      <template v-slot:title>Continuous Integration & Deployment</template>
      <template v-slot:summary>
        My recommended approach to CI/CD begins with fostering a culture of collaboration and shared responsibility, where every team member integrates their work regularly and addresses issues promptly, leveraging tools like Git for version control. I would advocate for the adoption of automated testing tools and practices at all stages of our development pipeline, to catch bugs early, improve code quality, and speed up the development cycle. Furthermore, I would champion the implementation of continuous deployment, using automated release processes to minimize the time between writing code and its deployment in production, ensuring that our product is always in a state that is ready to be delivered to our customers, thereby facilitating rapid, iterative, and high-quality software delivery.
      </template>
    </project-overview>
    <project-overview :imageUrl="agileImage" data-aos="fade-in">
      <template v-slot:title>Agile Delivery</template>
      <template v-slot:summary>
        I view agile software development as a collaborative, iterative, and adaptable approach to creating software. Agile delivery emphasizes frequent communication among cross-functional teams and with our customers, enabling us to continuously gather feedback and incorporate changes promptly. By delivering software in small, incremental portions, we can constantly reassess our plans, adjust as needed, and ensure that the software we produce not only meets our customers' evolving needs, but also maintains the highest standards of quality and value. Agile methods, like Scrum or Kanban, help us foster a culture of continuous improvement, flexibility, and rapid delivery of high-quality software.
      </template>
    </project-overview>
  </section>
</template>

<script>
import SectionHeading from "../components/SectionHeading.vue";
import ProjectOverview from "../components/ProjectOverview.vue";

import CloudImage from "../assets/images/cloud.jpg";
import DevelopmentImage from "../assets/images/development.jpg";
import AgileImage from "../assets/images/agile.jpg";

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
      agileImage: AgileImage
    };
  }
};
</script>

<style scoped lang="scss">
</style>
