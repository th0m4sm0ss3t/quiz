<template>
  <div class="wrapper">
    <header class="header">
      <h1 class="header-title">Quizotheque</h1>
    </header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/quiz">Our quiz</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <footer class="footer">
      <p>Made by <a href="http://www.thomasmosset.fr/en" target="_blank" class="text-success">Thomas Mosset</a> |͟↗̱|</p>
    </footer>
  </div>
</template>

<style lang="scss">
@import '@/css/vars.scss';

#app {
  font-family: $font;
  text-align: center;
  color: $main;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.header {
  background-color: $color;
  color: white;
  font-family: $siteFont;
  padding: 1rem 0;

  &-title {
    font-size: 5em;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $main;
    text-decoration: none;

    &.router-link-exact-active {
      color: $color;
    }
  }

  a:hover {
    text-decoration: underline;
  }
}

.footer {
  font-weight: bold;
  padding-top: 1rem;
  border-top: 2px solid $color;
}

.footer a {
  text-decoration: none;
}
</style>
