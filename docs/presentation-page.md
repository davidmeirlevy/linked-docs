---
title: Presentation Page
editLink: true
---
<PresentationPage/>

# Presentation Page

By clicking on "start presenting", you will see this page as a slideshow presentation.

cool, ha?!

### Install
```shell
$ npm i linked-docs
```

### Usage

**Add component to your VitePress / VuePress configurations**
```ts
// At your .vitepress/theme/index.ts:
import {PresentationPage} from 'linked-docs';
import 'linked-docs/dist/style.css'

export default {
	// ... other config
	enhanceApp({app}) {
		// some other code

		app.component('PresentationPage', PresentationPage);
	}
}
```

Use it at the top of your markdown files, e.g.:
```markdown
---
title: Page with slideshow
editLink: true
---
<PresentationPage/>

Lorem ipsum dolor sit emet
```


Enjoy!

Notice that the [linked items](./linked-items) below doesn't include at the slideshow

<LinkedItems/>
