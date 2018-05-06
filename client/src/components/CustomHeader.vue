<template>
	<v-navigation-drawer
		v-model="drawer"
		fixed
		clipped
		class="grey lighten-4"
		app>
	</v-navigation-drawer>
</template>
<script>
	export default {
		name: 'CustomHeader',
		data: function () {
			return {
				drawer: false
			}
		}
	}
</script>
<style scoped>

</style>
