<template>
  <table class="table table-striped">
    <thead>
    <tr>
      <td>#</td>
      <td>id</td>
      <td>date-time</td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(log, index) in logs" :key="log.id">
      <td>{{index}}</td>
      <td>{{log.id}}</td>
      <td>{{log.created_at.date}}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios'

export default {
name: "SessionLogs",
  data (){
    return {
      logs: []
    }
  },
  mounted() {
    axios.get('/api')
      .then((response)=>{
        this.logs = response.data;
      })
      .catch((error)=>{
        console.log('--------error------')
        console.log(error);
      })
  }
}
</script>

<style scoped>

</style>