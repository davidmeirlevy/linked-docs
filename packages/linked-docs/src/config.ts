import {reactive, computed} from 'vue'

export const config = reactive({
	locale: {
		'Start Presenting': 'Start Presenting'
	}
})

export const startPresentingText = computed(() => config.locale['Start Presenting'])

export function getContentContainer(el: HTMLElement): HTMLElement {
	return el.closest('.container').querySelector('.content');
}
