import DefaultTheme from 'vitepress/theme';

const components = import.meta.globEager('./components/*.vue');

export default {
	...DefaultTheme,
	enhanceApp({app}) {
		// register global components
		Object.keys(components).forEach(path => {
			const name = path.replace('./components/', '').replace(/\.vue$/, '');
			app.component(name, components[path].default);
		})
	}
}
