<template>
	<v-navigation-drawer class="nav-menu" permanent>
		<v-list>
			<v-list-tile @click="test('Info')">
				<v-list-tile-content>
					<v-list-tile-title class="headline">Info</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile @click="test('Gallery')">
				<v-list-tile-content>
					<v-list-tile-title class="headline">Gallery</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile @click="test('Shop')">
				<v-list-tile-content>
					<v-list-tile-title class="headline">Shop</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
			<v-list-tile @click="test('Contacts')">
				<v-list-tile-content>
					<v-list-tile-title class="headline">Contacts</v-list-tile-title>
				</v-list-tile-content>
			</v-list-tile>
		</v-list>
	</v-navigation-drawer>
</template>
<script>
	export default {
		name: 'CustomNavigationMenu',
		data: function () {
			return {};
		},
		methods: {
			test: function (value) {
				console.log('Test ' + value);
			}
		}
	};
</script>
<style scoped lang="scss">
	.nav-menu {
		font-family: 'Indie Flower', cursive;
	}
</style>
