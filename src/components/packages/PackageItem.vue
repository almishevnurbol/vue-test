<template>
    <v-card elevation="2">
        <v-card-title>{{ type }}</v-card-title>
        <v-card-subtitle>{{ name }}</v-card-subtitle>
    </v-card>
</template>

<script>

export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: ''
      },
    },

}
</script>
