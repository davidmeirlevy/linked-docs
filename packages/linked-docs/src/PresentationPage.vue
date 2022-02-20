<template>
	<div class="presentation-activator" ref="container">
		<button class="present-btn" @click="present">{{ startPresentingText }}</button>
		<div class="presentation" v-if="show" @click="next">
			<label><input class="keyboard-manager" @keyup.esc="exit"/></label>
			<div class="slide" v-html="contents[currentShownIndex]"/>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {startPresentingText} from './config'

const container = ref();
const show = ref(false);
const contents = ref([]);
const currentShownIndex = ref(0);

function present() {
	show.value = true
	if (contents.value.length > 0) return;

	const contentEl = container.value.parentElement;

	contents.value = Array.from(contentEl.children)
			.filter(el => !el.matches('.linked-items, .presentation-activator'))
			.reduce((all, el) => {
				if (el.tagName === 'P') {
					const sentences = el.innerHTML.split(/(\. |.\n)/g)
					return sentences.length > 3 ? all.concat(sentences) : all.concat([el.innerHTML])
				} else if (el.tagName === 'OL' || el.tagName === 'UL') {
					return all.concat(Array.from(el.children).map(listItem => `<${el.tagName}><li>${listItem.innerHTML}</li></${el.tagName}>`))
				}

				return all.concat(el.innerHTML);
			}, [])
}

function next() {
	currentShownIndex.value++;
	if (currentShownIndex.value >= contents.value.length) {
		currentShownIndex.value = 0;
		exit();
	}
}

function exit() {
	show.value = false
}
</script>

<style scoped>
.presentation {
	z-index: 99;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: #eee;
}

.present-btn {
	background-color: transparent;
	border: none;
	font-weight: bold;
	cursor: pointer;
}

.presentation > label {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}

.slide {
	font-size: 2em;
	padding: 10%;
}

.keyboard-manager {
	width: 0;
	height: 0;
	border: 0;
	background-color: transparent;
}
</style>
