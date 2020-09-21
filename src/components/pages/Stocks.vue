<template>
  <div class="row">
    <StockItem v-for="stock in stocks" :key="stock.id" :stock="stock"></StockItem>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StockItem from "../stocks/StockItem";

export default {
  components: {
    StockItem
  },
  computed: {
    ...mapGetters([
      'stocks'
    ])
  }
}
</script>
