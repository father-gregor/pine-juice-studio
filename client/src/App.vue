<template>
	<v-app id="pinejuicestudio">
		<custom-header></custom-header>
		<app-content></app-content>
		<custom-footer></custom-footer>
	</v-app>
</template>

<script>
	import CustomHeader from './components/CustomHeader.vue';
	import AppContent from './components/AppContent.vue';
	import CustomFooter from './components/CustomFooter.vue'
	import 'vue-awesome/icons/archive';
	import Icon from 'vue-awesome/components/Icon';

	export default {
		name: 'App',
		components: {
			CustomHeader,
			AppContent,
			CustomFooter,
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
