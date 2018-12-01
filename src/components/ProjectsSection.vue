<template>
  <section>
    <section-heading>Projects</section-heading>
    <project-overview :imageUrl="spectrumImage" data-aos="fade-in">
      <template slot="title">Spectrum.net Front End Web Portal</template>
      <template slot="company">Charter Communications</template>
      <template slot="summary">Upgraded publicly facing front end web portal that provides billing, marketing and support
        to millions of customers.  Implemented new designs and overhauled technology stack from AngularJS to Angular 2+.
      </template>
    </project-overview>
    <project-overview :imageUrl="emvImage" data-aos="fade-in">
      <template slot="title">EMV Payment Gateway</template>
      <template slot="company">Vail Resorts</template>
      <template slot="summary">Developed an end to end payment processing gateway for Vail Resorts POS systems.
        This system handles credit card chip and pin transactions, swipes, authorizations and settlement.
        Software stack includes C#, ASP.NET Web Api, and WPF.
      </template>
    </project-overview>
    <project-overview :imageUrl="vailImage" data-aos="fade-in">
      <template slot="title">Resort Point of Sale System</template>
      <template slot="company">Vail Resorts</template>
      <template slot="summary">Extended and refactored a legacy point of sale system to a more modern tech stack utilizing
        Web API RESTful services, Entity Framework and a WPF front end.
      </template>
    </project-overview>
    <project-overview :imageUrl="terumoImage" data-aos="fade-in">
      <template slot="title">Blood Donation KPI Dashboard</template>
      <template slot="company">Terumo BCT</template>
      <template slot="summary">Created an amazing experience for hospitals and blood donation centers to measure
        performance of medical devices used to collect blood donations using apheesis.
        Core Using Angular.js, ASP.NET WCF and Silverlight
      </template>
    </project-overview>
    <project-overview :imageUrl="trimaImage" data-aos="fade-in">
      <template slot="title">Medical Device Troubleshooting Software</template>
      <template slot="company">Terumo BCT</template>
      <template slot="summary">Built an application for hospitals and blood donation centers to measure
        performance of medical devices used to collect blood donations using apheesis.
        Core Using Angular.js, ASP.NET WCF and Silverlight
      </template>
    </project-overview>
    <project-overview :imageUrl="stockImage" data-aos="fade-in">
      <template slot="title">Wealth Management Experience</template>
      <template slot="company">Talisys Tech</template>
      <template slot="summary">Talitys Tech, formerly CSS, is dedicated to changing the game in the financial
        servvices sector by providing real time stock processing software. Their flagship application
        is a rich client application which provides an unparalleled experience for financial planers to manager
        orders and clients written in WPF, ASP.NET WCF, and SQL Server.
      </template>
    </project-overview>
  </section>
</template>

<script>
  import SectionHeading from './SectionHeading.vue'
  import ProjectOverview from './ProjectOverview.vue';

  import TerumoImage from '../assets/images/blood-donation.jpg';
  import StockImage from '../assets/images/stock-chart.png';
  import EmvImage from '../assets/images/emv.gif';
  import SpectrumImage from '../assets/images/spectrum.jpg';
  import VailImage from '../assets/images/vail.jpg';
  import TrimaImage from '../assets/images/trima.jpg';


  export default {
    name: "ProjectsSection",
    components: {
      SectionHeading,
      ProjectOverview
    },
    data() {
      return {
        terumoImage: TerumoImage,
        stockImage: StockImage,
        emvImage: EmvImage,
        spectrumImage: SpectrumImage,
        vailImage: VailImage,
        trimaImage: TrimaImage,
      }
    },
  }
</script>

<style scoped lang="scss">

</style>
