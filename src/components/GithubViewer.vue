<template>
  <v-container>
  <v-row class="text-center">
  <v-col cols="12">
    <h1>GisthubViewer</h1>
    <GithubRepo></GithubRepo>
  </v-col>
  </v-row>
  </v-container>
</template>

<script>
  import GithubRepo from './GithubRepo'
  export default {
    components: {
      GithubRepo,
    },
    
    data: () => ({
      
    }),
  }
</script>
