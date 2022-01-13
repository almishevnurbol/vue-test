<template>
  <v-app>
    <Header />
    <PackageTable />
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    Header: () => import('./components/layout/Header.vue'),
    PackageTable: () => import('./components/packages/PackageTable.vue')
  }
};
</script>
