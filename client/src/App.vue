<template>
	<v-app id="pinejuicestudio">
		<custom-header></custom-header>
		<v-container>
			<v-layout row wrap>
				<v-flex xs12>
					<app-content></app-content>
				</v-flex>
			</v-layout>
		</v-container>
		<custom-footer></custom-footer>
	</v-app>
</template>

<script>
	import CustomHeader from './components/CustomHeader.vue';
	import AppContent from './components/AppContent.vue';
	import CustomFooter from './components/CustomFooter.vue'

	export default {
		name: 'App',
		components: {
			CustomHeader,
			AppContent,
			CustomFooter
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
