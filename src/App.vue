<template>
  <nav-bar></nav-bar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/UI/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: url(./assets/bg.img) no-repeat center center fixed;
  color: rgb(175, 175, 175);
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
}
hr {
  background-color: rgb(175, 175, 175);
}
h2 {
  font-style: italic;
  margin-top: 15px;
}

.app {
  margin: 0 auto;
  padding: 20px;
  max-width: 1000px;
}
</style>
