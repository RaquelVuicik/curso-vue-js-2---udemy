<template>
    <div class="contadores">
        <h1>Contadores</h1>
        <app-contador v-for="c in 5" :key="c" />
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