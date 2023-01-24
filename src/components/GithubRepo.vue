<template>
  <div>
    <v-card-text>
      <v-autocomplete
        v-model="githubUser"
        :items="userList"
        :loading="loading"
        :search-input.sync="userSearch"
        item-text="login"
        
      ></v-autocomplete>
      <div v-if="loading">
        <br><br><br><br><br><br><br><h1>LOADING</h1>
      </div>
    </v-card-text>
  
  </div>
</template>

<script>
  import {debouncerDecorator} from '@/helpers/debouncer'
  export default {
    data: () => ({
      githubUser: null,
      userSearch: null,
      userList: [],
      loading: false,
    }),
    methods: {
      lookingForGithubUser: debouncerDecorator(function () {

        console.log('Procurando user ', this.githubUser)
        this.loading = true
        setTimeout(() => {
          this.userList = [
            {login: 'joao'},
            {login: 'jose'},
          ]
          this.loading = false
        }, 1000)
        }, 500)
    },
    watch: {
      userSearch() {
        this.lookingForGithubUser()
      }
    },
  }
</script>
