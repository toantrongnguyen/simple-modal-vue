# Simple Modal Vue
- ### Very light and simple modal component for Vue
- ### No dependency required
- ### No external CSS library required
- ### Fully support on IE10, IE11, Edge, Firefox, Safari, Ipad Safari and Chrome of course

## Install

```bash
npm install simple-modal-vue --save
```

## Usage
Usage in example
```js
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

## Props and methods
Updating ...

## Vesion
1.0.1 Publish release

## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build
```
