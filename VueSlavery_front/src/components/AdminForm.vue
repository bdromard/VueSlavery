<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';

let databaseApi = 'http://localhost:5174/api/database/'
const tables = ref()
const columns = ref()

const getTables = async () => {

  try { 
  const response = await fetch(`${databaseApi}allTables`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  });

  const allTables = await response.json()
  tables.value = allTables
  }

  catch(error) {
    console.log(error)
  };
};

const getColumns = async (model) => {

  try {

  const response = await fetch(`${databaseApi}allColumns`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      model: model
    
  })
  });

  const allColumns = await response.json()
  columns.value = allColumns
  } 

  catch(error) {
    console.log(error)
  };
};

onMounted(() => {
  getTables()
})

</script>

<template>
  <form id="admin-form" class="bg-red-500 w-1/2 h-60">
    <div class="admin-form">
      <label for="tables">Select table</label>
      <select name="tables">
        <option value="Tables" selected>Tables</option>
        <option v-for="value in tables" @click.prevent="getColumns(value['Tables_in_VueSlaveryDB'])">{{ value['Tables_in_VueSlaveryDB'] }}</option>
      </select> 
    </div>
  </form>
</template>
