<template>
  <div>
    <v-text-field
      label="Search..."
      hide-details="auto"
      v-model="query"
      @input="updateQuery(query)"
    ></v-text-field>
  </div>
</template>

<script>
import { mapActions  } from 'vuex';

export default {
  name: 'SearchInput',
  data: () => ({
    query: '',
  }),
  methods: {
    ...mapActions('search', ['updateQuery'])
  }
}
</script>
