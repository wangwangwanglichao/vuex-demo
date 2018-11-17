<template>
  <div id="app">
    <h1>Welcome vuex-demo</h1>
    <button @click="decrement">减少</button>
    <button @click="increment">增加</button>
    <button @click="oddAddThree">奇数加三</button>
    <button @click="evenAdd">偶数增加</button>
    <button @click="AddAsync">异步增加</button>
    <div>
      现在数字为: {{ count }}, 它是一个{{ oddOrEven }}
    </div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from "vuex"
  export default {
    methods: mapActions([
      "increment",
      "decrement",
      "oddAddThree",
      "evenAdd",
      "AddAsync"
    ]),
    computed: mapGetters([
      'count',
      "oddOrEven"
    ])
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
