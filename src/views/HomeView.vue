<template>
  <div class="home">
    <SearchBar />
    <Spinner v-if="toggleSpinner" />
    <ResultsSet />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'
import ResultsSet from '@/components/ResultsSet.vue'
import Spinner from '@/components/Spinner.vue'
import { mapState } from 'vuex';

export default {
  name: 'HomeView',
  computed: {
    ...mapState({
      toggleSpinner: state => state.showSpinner
    })
  },
  components: {
    SearchBar,
    ResultsSet,
    Spinner
  }
}
</script>
