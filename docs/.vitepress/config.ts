import {defineConfig} from 'vitepress';

export default defineConfig({
	title: 'Linked DOCS',
	description: '',
	themeConfig: {
		repo: '',
		docsDir: 'docs',
		docsBranch: 'main',
		sidebar: [
			{link: '/', text: 'Index'},
			{link: '/linked-items', text: 'Linked Items'},
			{link: '/presentation-page', text: 'Presentation Page'},
			{link: '/lorem', text: 'Lorem'},
			{link: '/ipsum', text: 'Ipsum'},
			{link: '/dolor', text: 'Dolor'},
			{link: '/sit', text: 'Sit'},
			{link: '/amet', text: 'Amet'},
		]
	},
});
