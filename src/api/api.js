export const api = {
  async searchUser(searchString) {
    const result = await fetch(`https://api.github.com/search/users?q=${searchString}`)
    const result_json = await result.json()
    return result_json
  }
}