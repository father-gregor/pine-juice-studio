<template>
	<v-content>
		<v-container>
			<art-container></art-container>
		</v-container>
	</v-content>
</template>
<script>
	import ArtContainer from './ArtContainer.vue'

	export default {
		name: 'AppContent',
		components: {
			ArtContainer
		}
	}
</script>
<style scoped>

</style>
