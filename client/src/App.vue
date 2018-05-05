<template>
	<div id="app">
		<img src="./assets/logo.png">
		<icon label="No Photos">
			<icon name="archive"></icon>
		</icon>
		<router-view/>
	</div>
</template>

<script>
	import 'vue-awesome/icons/archive'
	import Icon from 'vue-awesome/components/Icon'

	export default {
		name: 'App',
		components: {
			Icon
		}
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
</style>
