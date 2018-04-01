<template>
	<div id="reciters">
		<h1>القارئ</h1>
		<form @change="selectReciter">
			<select v-model="reciter" id="select">
				<option value="">إختر مقرئك المفضل</option>
				<option v-for="reciter in reciters" :value="reciter" :key="reciter.id">{{ reciter.name }}</option>
			</select>
		</form>
	</div>
</template>
<script>
import axios from 'axios'
	export default {
		data(){
			return {
				reciter:''
			}
		},
		mounted(){
			axios.get('https://quran-bj.herokuapp.com/reciters').then(response => {
				this.$store.commit('setReciters', response.data.reciters)
			}).catch(errors => {
				console.log(errors)
			})
		},
		computed: {
			reciters(){
				return this.$store.getters.getReciters
			}
		},
		methods:{
			selectReciter(){
				var payload = [];

				axios.get('https://quran-bj.herokuapp.com/surats').then(response => {
					 response.data.Suras_Name.map(surat => {
					 	this.reciter.suras.split(',').map(Number).map(s=>{
					 		if(surat.id == s){
					 			payload.push(surat)
					 		}
					 	})
					 	
					 })
				this.$store.commit('setSurats', payload)
				this.$store.commit('setReciter', this.reciter.name)
				this.$store.commit('setServer', this.reciter.Server)

				}).catch(errors => {
					console.log(errors)
				})
			}
		}
	}
</script>