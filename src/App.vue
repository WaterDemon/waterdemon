<template>
  <div id="app">
    <canvas id="c" :style="{height: screenHeight+'px',width:screenWidth+'px'}"></canvas>
    <img class="logo" src="./assets/hahaha.gif">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#c {
  display: block;
  background:radial-gradient(ellipse at top, #112 18%, #000 150%);
  z-index: -1;
  position : absolute;
  margin: 0 auto;
}
html{
  background:#EEEEEE;
}
.logo{display:block;width: 180px;height: 180px;position: absolute;top:10px;right:10px;}
</style>
