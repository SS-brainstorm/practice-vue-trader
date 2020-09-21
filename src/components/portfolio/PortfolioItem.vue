<template>
  <div class="col-md-6">
    <div class="card mb-4">
      <div class="card-header bg-info text-white">
        <h5 class="mb-0"><strong>{{ stock.title }}</strong> <small>(Price : {{ stock.price }} | Quantity: {{ stock.quantity }})</small></h5>
      </div>
      <div class="card-body">
        <form action="">
          <div class="row">
            <div class="col-md-8">
              <input
                type="number"
                class="form-control"
                placeholder="Quantity"
                min="0"
                :max="stock.quantity"
                v-model="quantity"
              >
            </div>
            <div class="col-md-4 text-right">
              <button
                type="submit"
                class="btn btn-danger"
                :disabled="Number.parseInt(quantity) <= 0 || quantity === ''"
                @click.prevent="sellStock"
              >Sell</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: 0,
      }
    },
    methods: {
      sellStock() {
        const order = {
          id: this.stock.id,
          quantity: this.quantity,
          price: this.stock.price
        };

        this.$store.dispatch('sellStock', order);

        this.quantity = 0;
      }
    }
  }
</script>
