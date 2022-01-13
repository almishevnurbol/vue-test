<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="pages"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
      @input="updatePage(page)"
    ></v-pagination>
  </div>
</template>

<script>
  import { mapActions  } from 'vuex'

  export default {
    data () {
      return {
        page: 1,
      }
    },
    props: {
      pages: {
        type: Number,
        default: 0
      }
    },
    methods: {
      ...mapActions('packages', ['updatePage'])
    }
  }
</script>