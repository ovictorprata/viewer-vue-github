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
  import {api} from '@/api/api'

  export default {
    data: () => ({
      githubUser: null,
      userSearch: null,
      userList: [],
      loading: false,
    }),
    methods: {
      lookingForGithubUser: debouncerDecorator(async function () {
        this.loading = true
        const data = await api.searchUser(this.userSearch)
        this.userList = data.items
        this.loading = false
        }, 500)
    },
    watch: {
      userSearch() {
        this.lookingForGithubUser()
      }
    },
  }
</script>
