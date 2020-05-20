<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="apiUrl"
      :rules="[v => !!v || 'required']"
      label="api url"
      required
    />

    <v-text-field
      v-model="username"
      :rules="[v => !!v || 'required']"
      label="username"
      required
    />

    <v-text-field
      v-model="token"
      :rules="[v => !!v || 'required']"
      label="token"
      required
    />

    <v-text-field
      v-model="apiVersion"
      :rules="[v => !!v || 'required']"
      label="api version"
      required
    />

    <v-radio-group v-model="userAgent" :rules="[v => !!v || 'required']" row>
      <v-radio label="Android" value="radio-1" />
      <v-radio label="iOS" value="radio-2" />
    </v-radio-group>

    <v-btn
      :disabled="!valid"
      @click="save"
      x-large
      color="primary"
      class="mr-4"
    >
      Save
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data () {
    const {
      username,
      token,
      apiUrl,
      apiVersion,
      userAgent
    } = this.$store.state.settings
    return {
      username,
      token,
      apiUrl,
      apiVersion,
      userAgent,
      valid: true
    }
  },

  methods: {
    save () {
      if (this.$refs.form.validate()) {
        const {
          username, token, apiUrl, apiVersion, userAgent
        } = this
        this.$store.commit('settings/set', {
          username, token, apiUrl, apiVersion, userAgent
        })
      }
    }
  }
}
</script>
