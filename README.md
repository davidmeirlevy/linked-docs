# Linked Docs


### Demo
https://linked-docs.netlify.app/

### Install
```shell
$ npm i linked-docs
```

### Usage

*Add component to your VitePress / VuePress configurations *
```ts
// At your .vitepress/theme/index.ts:
import {LinkedItems} from 'linked-docs';
import 'linked-docs/dist/style.css'

export default {
	// ... other config
	enhanceApp({app}) {
		// some other code

		app.component('LinkedItems', LinkedItems);
	}
}
```

use it at the top of your markdown files, e.g.:
```markdown
---
title: Linked DOCS
editLink: true
---
<LinkedItems/>

Lorem ipsum dolor sit emet
```


Enjoy!
