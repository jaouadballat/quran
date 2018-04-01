<template>
<div id="player">
<div class="player paused">
  <div class="album">
    <div class="cover">
      <div><img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAARYAAAAJDc4ODg3N2UzLWMxM2ItNDZiMi05YTBjLWRjOWYyODRjY2M0Ng.jpg" alt="quran" /></div>
    </div>
  </div>
  
  <div class="info">
    <div class="time">
      <span class="current-time">0:00</span>
      <span class="progress"><span></span></span>
      <span class="duration">0:00</span>
    </div>
    
    <h1>قرآني</h1>
    <h2>{{ reciter }}</h2>
    <h2>{{ surat }}</h2>
  </div>
  
  <div class="actions">
    <button class="shuffle">
      <div class="arrow"></div>
      <div class="arrow"></div>
    </button>
    <button class="button rw">
      <div class="arrow"></div>
      <div class="arrow"></div>
    </button>
    <button class="button play-pause">
      <div class="arrow"></div>
    </button>
    <button class="button ff">
      <div class="arrow"></div>
      <div class="arrow"></div>
    </button>
    <button class="repeat"></button>
  </div>
  
  <audio ref="audio" :src="src"></audio>
</div>
	</div>
</template>

<script>
  export default {
    
    computed: {
      reciter(){
        return this.$store.getters.getReciter
      },
      surat(){
        return this.$store.getters.getSurat
      },
      src(){
        return this.$store.getters.getSrc
      }
    },
    watch: {
      'src' (){
         $('.player').removeClass('playing').addClass('paused')

      }
    }
    }
</script>