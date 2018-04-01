<template>
  <div id="app">
    <player></player>
    <div class="box">
      <reciters></reciters>
      <surats></surats>
    </div>
  </div>
</template>

<script>
import Player from './components/Player.vue'
import Reciters from './components/Reciters.vue'
import Surats from './components/Surats.vue'
export default {
  data () {
    return {
    }
  },
  components:{
    'player': Player,
    'surats': Surats,
    'reciters': Reciters
  }
}
</script>

<style>

</style>
