<template>
  <div class="col-md-6">
    <div class="card mb-4">
      <div class="card-header text-success">
        <h5 class="mb-0"><strong>{{ stock.title }}</strong> <small>(Price : {{ stock.price }})</small></h5>
      </div>
      <div class="card-body">
        <form action="">
          <div class="row">
            <div class="col-md-8">
              <input
                type="number"
                min="0"
                class="form-control"
                :class="{ 'is-invalid': !checkFunds }"
                placeholder="Quantity"
                v-model="quantity"
              >
            </div>
            <div class="col-md-4 text-right">
              <button
                type="submit"
                class="btn "
                :class="[{ 'btn-danger': !checkFunds }, 'btn-success']"
                :disabled="Number.parseInt(quantity) <= 0 || quantity === '' || !checkFunds"
                @click.prevent="buyStock">Buy</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    ...mapGetters([
      'funds'
    ]),
    checkFunds() {
      return this.stock.price * this.quantity <= this.funds;
    }
  },
  methods: {
    /**
     * Buy stock
     * @param quantity
     */
    buyStock() {
      const order = {
        id: this.stock.id,
        price: this.stock.price,
        quantity: Number(this.quantity)
      };

      this.$store.dispatch('buyStock', order);

      this.quantity = 0;
    }
  }
}
</script>
