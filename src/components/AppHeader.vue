<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <router-link class="navbar-brand" to="/">Stock trader</router-link>
    <div class="navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <router-link
          tag="li"
          class="nav-item"
          active-class="active"
          v-for="route in routes"
          :key="route.text"
          :to="route.link">
          <a class="nav-link">{{ route.text }}</a>
        </router-link>

      </ul>
      <div class="ml-auto d-flex">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="endDay">End Day</a>
          </li>
          <li class="nav-item dropdown" :class="{ show: dropdownState }">
            <a href="#" class="nav-link dropdown-toggle" @click.prevent="toggle">Save & Load</a>
            <div class="dropdown-menu" :class="{ show: dropdownState }">
              <a href="#" class="dropdown-item" @click.prevent="saveStocksData">Save</a>
              <a href="#" class="dropdown-item" @click.prevent="loadStocksData">Load</a>
            </div>
          </li>
        </ul>
        <strong class="ml-2 align-self-center">
          Funds: {{ convertedFunds }}
        </strong>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      dropdownState: false,
      routes: [
        {
          link: {
            name: 'portfolio',
          },
          text: 'Portfolio'
        },
        {
          link: {
            name: 'stocks',
          },
          text: 'Stocks'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'convertedFunds',
      'funds',
      'stockPortfolio',
      'stocks'
    ])
  },
  methods: {
    ...mapActions([
      'randomStocks',
      'loadData'
    ]),
    endDay() {
      this.randomStocks();
    },
    saveStocksData() {
      const data = {
        funds: this.funds,
        stockPortfolio: this.stockPortfolio,
        stocks: this.stocks,
      };

      localStorage.setItem('data', JSON.stringify(data));
    },
    loadStocksData() {
      this.loadData();
    },
    toggle() {
      this.dropdownState = !this.dropdownState;
    }
  }
}
</script>
