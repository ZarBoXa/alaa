<template>
  <div>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li>
        <router-link to="/register">Register</router-link>
      </li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>

    This is the layout header
    <router-link to="/login">Login</router-link>
    <div>      
      <router-link to="/users/3">profile 3</router-link>
    </div>
    <div>
      <router-link to="/users/4">profile 4</router-link>
    </div>
    <div>
      <router-link to="/users/10">profile 10</router-link>
    </div>
    <div>
      <router-link to="/users/5300">profile 5300</router-link>
    </div>
    <!-- <router-link :to="{path: '/login'}">Login</router-link> -->
    <!-- <router-link :to="{name: 'auth-login'}">Login</router-link> -->
  </div>
</template>

<script>
export default {

}
</script>