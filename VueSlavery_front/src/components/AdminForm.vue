<script setup>
import { ref } from 'vue';

let databaseApi = 'http://localhost:5174/api/database/allTables'
const tables = ref([])

const getTables = async () => {
  const response = await fetch(databaseApi, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  }).then((data) => {
      let tab = data.json()
    })
}

console.log(getTables())
</script>

<template>
  <form id="admin-form">
    <div class="admin-form bg-red-500 w-1/2 h-1/2">
      <label for="table">Select table</label>
      <input id="table">
    </div>
  </form>
</template>
