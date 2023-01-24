export const api = {
  searchUser(searchString) {
    return fetch(`https://api.github.com/search/users?q=${searchString}`).then(r => r.json())
  }
}