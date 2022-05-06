<template>
  <v-app>
     <app-page></app-page>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppPage from '@/components/AppPage.vue'

export default defineComponent({
  name: 'App',
    components: {
    AppPage,
  },
})
</script>
