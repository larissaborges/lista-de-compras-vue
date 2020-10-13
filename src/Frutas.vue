<template>
  <div>
    <h2>Lista de compras</h2>
    <p>adicione um item à lista de compras</p>
    <div>
      <input type="text" v-model="item" @keydown.enter="add" />
    </div>
    <span>clique no item para remove-lo da lista.</span>
      <ul>
        <li @click="removerItem(i)" v-for="(item, i) in lista" :key="item">{{ item }}</li>
      </ul>
  </div>
  
</template>

<script>
import frutasMixin from "./frutasMixin";
export default {
  mixins: [frutasMixin]
};
</script>

<style scoped>
span {
  font-size: 10px;
}
</style>