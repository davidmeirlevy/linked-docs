<template>
	<div class="linked-items" ref="container">
		<a v-for="(link, index) in links" :key="index" :href="link.href" :data-count="link.count"><span>{{ link.text }}</span></a>
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

	const map = new Map
	linksEls.forEach(el => {
		if (!el.href.startsWith(location.origin)) {
			return;
		}
		if (map.has(el.href)) {
			map.get(el.href).count++;
		} else {
			map.set(el.href, {text: el.innerText, href: el.href, count: 1});
		}
	})
	links.value = Array.from(map.values()).sort((a, b) => {
		return b.count - a.count;
	});
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

@media screen and (max-width: 700px) {
	a {
		width: 30vw;
		height: 30vw;
		font-size: 1.8em;
		transition: none;
	}

	a:hover {
		border-width: 0;
	}
}
</style>
