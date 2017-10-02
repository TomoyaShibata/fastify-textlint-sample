<template>
  <textarea name="content" id="" cols="40" rows="5" v-model="content">
  </textarea>
</template>

<script>
export default {
  name: 'text-editor',

  computed: {
    content: {
      get () { return this.$store.state.content },
      set (value) { this.$store.commit('updateContent', value)}
    }
  }
}
</script>

<style scoped>

</style>
