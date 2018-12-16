<h3 align="center"><a href="https://probot.github.io">Simple Modal Vue</a></h3>
<p align="center">Very light and simple modal component for Vue<p>
<p align="center"><a href="https://www.npmjs.com/package/simple-modal-vue"><img src="https://badgen.net/npm/v/simple-modal-vue" alt="NPM"></a>

---

- ### Very light and simple modal component for Vue
- ### No dependency required
- ### No external CSS library required
- ### Fully support on IE10, IE11, Edge, Firefox, Safari, Ipad Safari and Chrome of course
- ### Fix scroll on Ipad

### Install

```bash
npm install simple-modal-vue --save
```
```bash
yarn add simple-modal-vue --save
```

### Usage
Usage in example
```html
<template>
  <div>
    <simple-modal v-model="isShow" title="Modal Header">
      <template slot="body">
        <h2>My modal</h2>
        <input>
        <p>Hello you</p>
      </template>
      <template slot="footer">
        <button>OK</button>
      </template>
    </simple-modal>
    <button @click="isShow = !isShow">on off button</button>
  </div>
</template>

<script>
import SimpleModal from 'simple-modal-vue'
export default {
  name: 'SimpleModalExample',
  components: { SimpleModal },
  data() {
    return { isShow: false }
  },
}
</script>
```

### Props and methods

| Name      | Required | Type          | Default     | Description |
| ---       | ---      | ---           | ---         | ---         |
| title      | false  | String |             | Name of the modal |
| hasButtonClose | false | Boolean          | false       | If true allows showing the button close on the modal |
| hasFooter | false | Boolean          | false       | If true allows showing the footer of the modal |
| size | false | String ['responsive', 'small', 'big' ]         | 'responsive'       | If true allows resizing depend on config the modal window. |

### Events

| Name         | Description |
| ---          | --- |
| onOpen  | Emits when modal is opened |
| onClose       | Emits when modal is closed |

### Vesion	
- 1.0.9 Fix some minor issues
- 1.0.5 Add unit test coverage 100%
- 1.0.1 Publish release
