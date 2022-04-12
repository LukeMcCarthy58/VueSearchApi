<template>
    <div class="row" style="margin-bottom: 50px;">
        <div class="col-sm"></div>
        <div class="col-lg-4 col-lg-offset-4">
            <input type="text" id="searchBar" class="form-control" placeholder="Search for product..." v-model="searchQuery" />
        </div>
        <div class="col-sm"></div>
    </div>
</template>

<script>
export default {
  name: 'SearchBar',
  computed: {
      searchQuery: {
        set(searchString) {
            this.$store.dispatch('setResults', searchString)
        }
      }
  }
}
</script>