<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/quiz">Our quiz</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
@import '@/css/vars.scss';

#app {
  font-family: $font;
  text-align: center;
  color: $main;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $main;

    &.router-link-exact-active {
      color: $color;
    }
  }
}
</style>
