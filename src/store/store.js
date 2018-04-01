import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		reciters: [],
		surats: [],
		reciter:'أحمد الحذيفي',
		surat:'الفاتحة',
		src: 'http://server8.mp3quran.net/ahmad_huth/001.mp3',
		server: '',

	},
	getters:{
		getReciters: state => state.reciters,
		
		getSurats: state => state.surats, 

		getSurat: state => state.surat,

		getReciter: state => state.reciter,

		getServer: state => state.server,

		getSrc: state => state.src,

		getReload: state => state.reload

	},
	mutations:{
		setReciters: (state, payload) => {
			state.reciters = payload
		},
		setSurats: (state, payload) => {
			state.surats = payload
		},
		setSurat: (state, payload) => {
			state.surat = payload
		},
		setReciter: (state, payload) => {
			state.reciter = payload
		},
		setServer: (state, payload) => {
			state.server = payload
		},
		setSrc: (state, payload) => {
			state.src = payload
		}
	}
})


export default store