import DefaultTheme from 'vitepress/theme';
import {LinkedItems, PresentationPage} from 'linked-docs'
import 'linked-docs/dist/style.css'

export default {
	...DefaultTheme,
	enhanceApp({app}) {
		app.component('LinkedItems', LinkedItems)
		app.component('PresentationPage', PresentationPage)
	}
}
