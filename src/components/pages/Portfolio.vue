<template>
  <div class="row">
    <PortfolioItem v-for="stock in stockPortfolio" :key="stock.id" :stock="stock"></PortfolioItem>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PortfolioItem from "../portfolio/PortfolioItem";

export default {
  components: {
    PortfolioItem
  },
  computed: {
    ...mapGetters([
      'stockPortfolio'
    ])
  }
}
</script>
