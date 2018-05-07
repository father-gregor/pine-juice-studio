<template>
	<v-layout row class="header-container">
		<v-flex xs5 class="flex-left">
			<v-layout column fill-height>
				<v-flex xs3></v-flex>
				<v-flex xs9>
					<div class="drinking-straw">
						<div class="drinking-straw-body"></div>
					</div>
				</v-flex>
			</v-layout>
		</v-flex>
		<v-flex xs2 justify-center class="flex-logo">
			<div class="logo-container">
				<router-link to="/">
					<img src="../assets/images/header/pine_logo.png" v-bind:alt="$options.stringsConfig.logoAlt"/>
				</router-link>
			</div>
		</v-flex>
		<v-flex xs5 class="flex-right">
			<v-layout column fill-height>
				<v-flex xs3>
					<div class="pull-right">
						<icon name="brands/facebook-square"></icon>
						<icon name="brands/instagram"></icon>
					</div>
				</v-flex>
				<v-flex xs9>
					<div class="drinking-straw">
						<div class="drinking-straw-body"></div>
					</div>
				</v-flex>
			</v-layout>

		</v-flex>
	</v-layout>
</template>
<script>
	import * as stringsConfig from '../assets/config/strings.json';
	import Icon from 'vue-awesome/components/Icon';

	export default {
		name: 'CustomHeader',
		data: function () {
			return {
				drawer: false
			}
		},
		components: {
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
		padding-top: 25px;

		@media screen and (max-width: $sm-max-width) {
			padding-top: 15px;
		}
	}

	.drinking-straw {
		margin: auto;
	}

	.drinking-straw-body {
		height: 20px;
		background: $color-drinking-straw;
		border-radius: 5px;
	}
</style>
