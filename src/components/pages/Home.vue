<template>
  <div class="card">
    <div class="card-body">
      <h1 class="card-title">Trade or View your Portfolio</h1>
      <p class="card-text">
        <small>You may Save & Load your Data</small><br>
        <small>Click on 'End Day' to begin a new Day!</small>
      </p>
      <hr>
      <h5><strong>Your Funds: {{ convertedFunds }}</strong></h5>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      'convertedFunds'
    ])
  }
}
</script>
