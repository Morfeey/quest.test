<template>
  <div id="app">
    <SessionLogs></SessionLogs>
  </div>
</template>

<script>
import SessionLogs from "@/components/SessionLogs"

export default {
  name: 'App',
  components: {
    SessionLogs
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
