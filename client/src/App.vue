<template>
	<v-app id="pinejuicestudio">
		<custom-header></custom-header>
		<v-container fluid>
			<v-layout row>
				<v-flex xs3 sm2 >
					<custom-navigation-menu></custom-navigation-menu>
				</v-flex>
				<v-flex xs9 sm10>
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
	import CustomNavigationMenu from "./components/CustomNavigationMenu";

	export default {
		name: 'App',
		components: {
			CustomNavigationMenu,
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
