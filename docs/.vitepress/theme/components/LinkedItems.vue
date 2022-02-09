<template>
	<div class="linked-items" ref="container">
		<a v-for="(link, index) in links" :key="index" :href="link.href"><span>{{ link.text }}</span></a>
	</div>
</template>

<script lang="ts" setup>
import {onMounted, ref, nextTick} from 'vue'

const container = ref();

const links = ref([]);

onMounted(async () => {
	await nextTick();
	const contentEl = container.value.closest('.container').querySelector('.content');
	const linksEls = contentEl.querySelectorAll('a');

	const set = new Set
	linksEls.forEach(el => {
		if (!set.has(el.href)) {
			set.add(el.href);
			links.value.push({text: el.innerText, href: el.href})
		}
	})
})
</script>

<style scoped>
.linked-items {
	padding: 10px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}

@media screen and (max-width: 700px) {
	.linked-items {
		flex-direction: column;
	}

	a {
		width: 80vw;
		height: 80vw;
	}
}

a {
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 0 solid white;
	color: black;
	width: 300px;
	height: 300px;
	border-radius: 50%;
	background-color: darkseagreen;
	margin: 20px;
	transition: border-width 0.2s linear;
	font-size: 2em;
}

a:hover {
	border-width: 30px;
	text-decoration: none;
}

a:nth-child(4n-2) {
	background-color: #df342a;
}

a:nth-child(4n-1) {
	background-color: #8feac7;
}
a:nth-child(4n) {
	background-color: #b8bd2c;
}
</style>
