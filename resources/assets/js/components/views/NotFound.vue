<template>
  <div>
    <h1>This path: {{ notFoundName }} is not exist</h1>
  </div>
</template>

<script>
export default {
  computed: {
    notFoundName () {
      return this.$route.path
    }
  }
}
</script>