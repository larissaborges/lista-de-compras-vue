<template>
  <div id="app">
    <Frutas />
  </div>
</template>

<script>
import Frutas from "./Frutas";
import frutasMixin from './frutasMixin'

export default {
  components: { Frutas },
  mixins: [frutasMixin]
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
input {
  font-size: 2.5rem;
}
</style>
