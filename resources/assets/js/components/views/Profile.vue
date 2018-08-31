<template>
  <div>
    This is the view profile for user with id {{ id }}
    <div>name: {{ user.first_name }}</div>
    <div>email: {{ user.email }}</div>
    <div>role: {{ user.role }}</div>
    <button class="btn" :class="{'btn-primary': !added, 'btn-success': added}" @click="addFriend">
      <span v-if="!added">Add Friend</span>
      <span v-if="added">Request sent</span>
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      added: false,
      user: {}
    }
  },
  methods: {
    getUserData () {
      axios.get('/users/json/' + this.id).then(res => {
        this.user = res.data.user
      }).catch(res => {
        console.log(res.response.data)
        this.$router.push({path: '/login'})
      })
    },
    addFriend () {
      this.added = !this.added
      axios.post('/users/create', {id: this.id, added: this.added})
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  created () {
    console.log('created')
    this.getUserData()
  },
  watch: {
    id () {
      console.log('id has been changed!!')
      this.getUserData()
    }
  }
}
</script>