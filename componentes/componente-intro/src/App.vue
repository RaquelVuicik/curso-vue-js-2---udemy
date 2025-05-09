<template>
  <div id="app">
    <h1>Contadores:</h1>
    <app-contador />
    <app-contador />
    <app-contador />
  </div>
</template>

<script>
import AppContador from './AppContador.vue'

export default {
  components: { AppContador },
}
</script>

<style>

</style>