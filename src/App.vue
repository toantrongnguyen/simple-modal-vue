<template>
  <div>
    <vue-simple-modal v-model="isShowModal" title="Modal Header">
      <template slot="body">
        <h2>My body</h2>
        <input>
        <p>
           <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?

    </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
        </p>
      </template>
      <template slot="footer">
        <button> I am ok </button>
      </template>
    </vue-simple-modal>
    <button @click="isShowModal = !isShowModal">on off </button>
    <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?

    </h1>
  </div>
</template>

<script>
import VueSimpleModal from './VueSimpleModal'
export default {
  components: { VueSimpleModal },
  data () {
    return { isShowModal: false }
  },
}
</script>

<style scoped>
button {
  padding: 12px 32px;
  background: greenyellow;
  border: none;
}
</style>
