<template>
	<v-layout row class="art-card">
		<v-flex xs12 v-bind:style="{backgroundImage: 'url(' + imgUrl +')'}" class="img img-mode-preview">
			<!--<img v-bind:src="imgUrl" v-bind:alt="title" class="img img-mode-preview"/>-->
		</v-flex>
		<div class="img-title">{{title}}</div>
	</v-layout>
</template>
<script>
	export default {
		name: 'ArtCard',
		props: [
			'imgUrl',
			'title',
			'type'
		],
		data () {
			return {

			}
		}
	}
</script>
<style scoped lang="scss">
	@import '../style/scss/variables';

	.art-card {
		position: relative;
		height: 250px;
		border-radius: 4px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		overflow: hidden;
		margin: 10px;
		cursor: pointer;

		@media screen and (max-width: $xs-max-width) {
			margin: 0 0 15px 0;
		}

		&:hover {
			.img {
				opacity: 1;
			}

			.img-title {
				background-color: rgba(210, 59, 59, 0.92);
			}
		}

		.img {
			background-repeat: no-repeat;
			background-position: top;
			background-size: 110% auto;
			-webkit-transition: opacity 1s, -webkit-transform 1s;
			transition: opacity 1s, transform 1s;

			&:hover {
				opacity: 1;
			}

			@media screen and (max-width: $xs-max-width) {
				background-size: 122% auto;
			}
		}

		.img-mode-preview {
			opacity: 0.5;
		}

		.img-title {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 20px;
			color: white;
			background-color: #d23b3b47;
			padding: 5px;
			border-radius: 4px;
			cursor: pointer;
			-webkit-transition: background-color 1s, -webkit-transform 1s;
			transition: background-color 1s, transform 1s;
		}
	}
</style>
