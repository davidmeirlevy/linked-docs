---
title: Linked Items
editLink: true
---
<LinkedItems/>

# Linked Items

### Install
```shell
$ npm i linked-docs
```

### Usage

**Add component to your VitePress / VuePress configurations**
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

Use it at the top of your markdown files, e.g.:
```markdown
---
title: Linked DOCS
editLink: true
---
<LinkedItems/>

Lorem ipsum dolor sit emet
```


Enjoy!

The links inside this page are shown above as bubbles.

Morbi ut elit libero. Morbi vel euismod [lorem](./lorem). Etiam mattis [sit](./sit) amet enim non molestie. Aenean vel massa a dui scelerisque cursus eget quis mi. Proin felis leo, tincidunt quis risus quis, facilisis cursus turpis. Morbi ultricies, orci non condimentum finibus, nisl nibh rhoncus urna, at blandit sem ex vitae metus. Cras vel ex eu tortor pulvinar gravida quis a elit. In id porttitor massa. Pellentesque ac orci a tortor accumsan tristique quis quis sem. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur est libero, lobortis eu mauris et, tincidunt pellentesque dolor. Curabitur elit nibh, dapibus a posuere eget, vestibulum [sit](./sit) amet mauris. Nullam lacus nisi, gravida vitae pharetra quis, blandit nec urna.

