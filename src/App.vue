<template>
  <div id="app">
    <div class="container">
      <div class="pt-5">
        <AppHeader></AppHeader>
        <transition
          enter-active-class="animate__animated animate__fadeIn"
          mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  name: 'app',
  components: {
    AppHeader
  },
  created() {
    this.$store.dispatch('initStocks');
  }
}
</script>

<style lang="scss">
</style>
