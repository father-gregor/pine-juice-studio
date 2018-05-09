<template>
	<v-layout row class="header-container">
		<v-flex xs5 class="flex-left">
			<drinking-straw></drinking-straw>
		</v-flex>
		<v-flex xs2 justify-center class="flex-logo">
			<div class="logo-container">
				<router-link to="/">
					<img src="../assets/images/header/pine_logo.png" v-bind:alt="$options.stringsConfig.logoAlt"/>
				</router-link>
			</div>
		</v-flex>
		<v-flex xs5 class="flex-right">
			<drinking-straw></drinking-straw>
			<div class="pull-right social-block">
				<a v-bind:href="$options.stringsConfig.facebook.url" target="_blank">
					<icon name="brands/facebook-square" scale="1.4"></icon>
				</a>
				<a v-bind:href="$options.stringsConfig.instragram.url" target="_blank">
					<icon name="brands/instagram" scale="1.4"></icon>
				</a>
			</div>
		</v-flex>
	</v-layout>
</template>
<script>
	import * as stringsConfig from '../assets/config/strings.json';
	import Icon from 'vue-awesome/components/Icon';
	import DrinkingStraw from './DrinkingStraw.vue'

	export default {
		name: 'CustomHeader',
		data: function () {
			return {
				drawer: false
			}
		},
		components: {
			DrinkingStraw,
			Icon
		},
		stringsConfig
	}
</script>
<style scoped lang="scss">
	@import '../style/scss/variables';

	.header-container {
		height: 150px;
		margin-top: 15px;
		padding-left: 15px;
		padding-right: 15px;
	}

	.flex-logo {
		margin-left: 15px;
		margin-right: 15px;
	}

	.logo-container {
		height: 100%;
		text-align: center;

		img {
			height: 100%;
			-ms-transform: rotate(40deg);
			-webkit-transform: rotate(40deg);
			transform: rotate(40deg);
		}
	}

	.flex-left,
	.flex-right {
		padding-top: 45px;

		@media screen and (max-width: $sm-max-width) {
			padding-top: 40px;
		}
	}

	.flex-right {
		position: relative;
	}

	.social-block {
		position: absolute;
		top: 20px;
		right: 20px;

		a {
			color: black;
			margin-left: 5px;
		}

		@media screen and (max-width: $sm-max-width) {
			top: 14px;
		}
	}
</style>
