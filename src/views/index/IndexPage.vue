<template>
  <div>
    <h1>Index Page</h1>
    <button @click="fetchData" :disabled="loading">连接后端</button>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <p>Response from backend: {{ responseData }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'IndexPage',
  data() {
    return {
      responseData: null,
      loading: false,
    };
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const response = await axios.get('http://127.0.0.1:8080/index/'); // URL
        console.log(response)
        this.responseData = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        this.responseData = 'Failed to fetch data';
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>