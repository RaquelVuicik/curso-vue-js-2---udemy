<template>
  <div id="app">
    <h1>Contadores:</h1>
    <app-contadores />
    <app-contador />
  </div>
</template>

<script>
import AppContador from './AppContador.vue'
import AppContadores from './AppContadores.vue'

export default {
  components: { AppContadores, AppContador }
}
</script>

<style>

</style>