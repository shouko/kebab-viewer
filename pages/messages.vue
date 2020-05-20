<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div class="text-center">
      <v-btn
        :disabled="dialog"
        :loading="dialog"
        @click="dialog = true"
        class="white--text"
        color="purple darken-2"
        x-large
      >
        Start loading
      </v-btn>
      <v-dialog
        v-model="dialog"
        hide-overlay
        persistent
        width="300"
      >
        <v-card
          color="primary"
          dark
        >
          <v-card-text>
            &nbsp;
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            />
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </v-layout>
</template>
<script>
export default {
  data () {
    return {
      dialog: false
    }
  },

  watch: {
    dialog (val) {
      if (!val) { return }

      setTimeout(() => (this.dialog = false), 4000)
    }
  }
}
</script>
