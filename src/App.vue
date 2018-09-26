<template>
  <div>
    <simple-modal v-model="isShowModal" title="Modal Header">
      <template slot="body">
        <h2>My body</h2>
        <input>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis optio consequatur a repellendus impedit fuga laboriosam quod modi ab?
        </p>
      </template>
      <template slot="footer">
        <button> I am ok </button>
      </template>
    </simple-modal>
    <button @click="isShowModal = !isShowModal">on off </button>
    <h1 class="message">
      {{ message }}
    </h1>
  </div>
</template>

<script>
import SimpleModal from './SimpleModal'

export default {
  components: { SimpleModal },
  data() {
    return { isShowModal: false }
  },
  computed: {
    message() {
      if (this.isShowModal) return 'modal is showing'
      return 'modal is hide'
    }
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
