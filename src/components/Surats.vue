<template>
	<div id="surats" class="box">
		<h1>السورة</h1>
		<form @change="player">
			<select  id="select" v-model="surat">
				<option value="">إختر سورة</option>
				<option v-for="surat in surats" :value="surat" :key="surat.id">{{  surat.name }}</option>
			</select>
		</form>
	</div>
</template>

<script>

	export default {
		data(){
			return {
				surat: ''
			}
		},
		computed: {
			surats(){
				return this.$store.getters.getSurats
			}
		},
		methods:{
			player(){
				this.$store.commit('setSurat', this.surat.name)
				var id;
				var url;

				if(this.surat.id < 10){
					id = "00"+this.surat.id 
				}else if(this.surat.id < 100){
					id = "0"+this.surat.id
				}
				url = this.$store.getters.getServer + "/" + id +".mp3"

				this.$store.commit('setSrc', url)
			}
		}
	}
</script>