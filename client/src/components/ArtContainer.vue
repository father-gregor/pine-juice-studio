<template>
	<v-layout row wrap>
		<v-flex v-for="art in arts" v-bind:key="art.id" md4 sm6 xs12 justify-center>
			<art-card v-bind:img-url="art.imgUrl" v-bind:title="art.title"></art-card>
		</v-flex>
	</v-layout>
</template>
<script>
	import ArtCard from './ArtCard.vue'

	export default {
		name: 'ArtContainer',
		components: {
			ArtCard
		},
		data () {
			return {
				arts: [
					{
						id: 1,
						imgUrl: 'https://pp.userapi.com/c841328/v841328936/d51/ECMoj2ukeYk.jpg',
						title: 'Channel Bag'
					},
					{
						id: 2,
						imgUrl: 'https://sun1-17.userapi.com/c840631/v840631513/29b98/xOTbAsLCyOQ.jpg',
						title: 'Hairdryer'
					},
					{
						id: 3,
						imgUrl: 'https://pp.userapi.com/c621706/v621706513/380ef/yhOTRDEMU5Y.jpg',
						title: 'Falling Cars'
					},
					{
						id: 4,
						imgUrl: 'https://pp.userapi.com/c834104/v834104513/33a6b/9d1Niv6GTZg.jpg',
						title: 'Roses are red'
					},
					{
						id: 5,
						imgUrl: 'https://pp.userapi.com/c637621/v637621936/2bf75/vuy7ndpIVH8.jpg',
						title: 'Quiet Warrior'
					}
				]
			}
		}
	}
</script>
<style scoped lang="scss">

</style>
