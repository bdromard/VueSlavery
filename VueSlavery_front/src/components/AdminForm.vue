<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';

let databaseApi = 'http://localhost:5174/api/database/allTables'
const tables = ref()

const getTables = async () => {
  const response = await fetch(databaseApi, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
  const allTables = await response.json()
  tables.value = allTables
}

onMounted(() => {
  getTables()
})

</script>

<template>
  <form id="admin-form" class="bg-red-500 w-1/2 h-60">
    <div class="admin-form">
      <label for="tables">Select table</label>
<!--       <button @click.prevent="getTables" class="bg-green-700"></button> -->
      <select name="tables">
        <option value="Tables" selected>Tables</option>
        <option v-for="value in tables">{{ value['Tables_in_VueSlaveryDB'] }}</option>
      </select> 
    </div>
  </form>
</template>
