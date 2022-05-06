<template>
  <v-main>
    <v-container fluid>
      <v-row class="text-center">
        <v-col cols="12">
          <div class="my-2">
            <v-checkbox color="primary" label="Checkbox on" v-model="checkbox"></v-checkbox>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      checkbox: true,
    }
  },
})
</script>
