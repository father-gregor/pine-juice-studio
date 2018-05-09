<template>
	<div class="drinking-straw">
		<div class="drinking-straw-body">
			<div class="gram-container">
				<div class="gram"></div>
				<div class="gram"></div>
				<div class="gram"></div>
				<div class="gram"></div>
				<div class="gram"></div>
				<div class="gram"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'DrinkingStraw'
	};
</script>
<style scoped lang="scss">
	@import '../style/scss/variables';

	.drinking-straw {
		margin: auto;
	}

	.drinking-straw-body {
		height: 20px;
		background: $color-drinking-straw;
		border: 2px solid #606060;
		border-radius: 10px;
		position: relative;

		&:before {
			position: absolute;
			left: -2px;
			border-radius: 100%;
			height: 100%;
			content: '';
			border: 8px solid #606060;

			@media screen and (max-width: $sm-max-width) {
				border: 5px solid #606060;
			}
		}

		&:after {
			position: absolute;
			right: -2px;
			height: 100%;
			border-radius: 100%;
			content: '';
			border: 8px solid #606060;

			@media screen and (max-width: $sm-max-width) {
				border: 5px solid #606060;
			}
		}

		@media screen and (max-width: $sm-max-width) {
			height: 15px;
		}
	}

	.gram-container {
		position: absolute;
		height: 100%;
		overflow: hidden;
		padding-right: 25px;

		@media screen and (max-width: $sm-max-width) {
			padding-right: 15px;
		}
	}

	.gram {
		display: inline-block;
		width: 40px;
		height: 20px;
		margin-left: 80px;
		-webkit-transform: skew(50deg );
		-moz-transform: skew(50deg);
		-o-transform: skew(50deg);
		background: #969696;
		border-left: 3px solid #474747;
		border-right: 3px solid #474747;

		@media screen and (max-width: $sm-max-width) {
			width: 25px;
			margin-left: 45px;
		}

		@media screen and (max-width: $xs-max-width) {
			margin-left: 35px;
		}
	}
</style>
