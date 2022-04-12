<template>
  <div v-if="!$store.state.showSpinner">
    <div v-if="searchResults != {}">
        <div class="row">
            <div class="card" style="width: 25rem; padding: 20px; margin: 20px;" v-for="result in searchResults" :key="result.id">
                <a v-bind:href="result.link"><img v-bind:src="result.image_url" v-bind:href="result.link" class="card-img-top" alt="result.title"></a>
                <div class="card-body">
                    <h5 class="card-title">{{ result.title }}</h5>
                    <p class="card-text">{{ result.brand }}</p>
                    <h5>£{{ result.price.min }}</h5>
                    <h6 :class="result.in_stock ? 'text-success' : 'text-danger'">
                        <span v-if="result.in_stock">In stock</span>
                        <span v-else>Out of stock</span>
                    </h6>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <h2>No results</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultsSet',
  computed: {
      searchResults() {
        return this.$store.state.searchResults
      }
  }
}
</script>