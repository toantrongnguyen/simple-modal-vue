<template lang="pug">
  transition(name="fade")
    div.vsm(v-if="value" tabindex="-1" @click.self="close" @keyup.esc="close")
      div.vsm-modal(:class="size")
        button.btn-close(v-if="hasButtonClose" type="button" @click="close")
          span(aria-hidden="true") &times;
        div.vsm-modal-header(v-if="title")
          h4.title {{ title }}
        div.vsm-modal-body
          slot(name="body")
        div.vsm-modal-footer(v-if="hasFooter")
          slot(name="footer")
</template>

<script>
export default {
  name: 'VueSimpleModal',
  props: {
    title: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
    hasButtonClose: {
      type: Boolean,
      default: true,
    },
    hasFooter: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'responsive',
    },
  },
  data() {
    return {
      previousScrollPosition: 0,
    }
  },
  methods: {
    open() {
      if (this.value) return
      this.$emit('input', true)
      this.$emit('onOpen')
    },
    close() {
      this.$emit('input', false)
      this.$emit('onClose')
    },
    disableScrollOnIpad(disable) {
      if (disable) {
        this.previousScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        document.body.classList.add('vsm-overflow-hidden-ipad')
        document.body.style.top = `-${this.previousScrollPosition}px`
        return
      }
      this.$nextTick(() => {
        document.documentElement.scrollTop = document.body.scrollTop = this.previousScrollPosition
        this.previousScrollPosition = 0
        document.body.style.top = 0
      })
      document.body.classList.remove('vsm-overflow-hidden-ipad')
    },
  },
  watch: {
    value() {
      if (this.isIpad) {
        this.disableScrollOnIpad(this.isShow)
        return
      }
      if (this.value) {
        document.body.classList.add('vsm-overflow-hidden')
      } else {
        document.body.classList.remove('vsm-overflow-hidden')
      }
    },
  },
  computed: {
    isIpad() {
      const userAgent = window.navigator.userAgent.toLowerCase()
      return /ipad/.test(userAgent)
    },
  },
}
</script>

<style lang="scss" scoped>
.vsm {
  & {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom:  0;
    z-index: 1050;
    background: rgba(0, 0, 0, 0.5);
    overflow: auto;
  }

  &-modal {
    box-sizing: border-box;
    margin: 50px auto 16px;
    background: white;
    border-radius: 4px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    width: auto;
    margin-left: 16px;
    margin-right: 16px;
    &-body, &-footer, &-header {
      padding: 16px;
    }
    &-header {
      background: #f7f7f7;
      .title {
        margin: 0;
        font-size: 20px;
      }
    }
    &-footer {
      border-top: 1px solid #f7f7f7;
    }
    .btn-close {
      position: absolute;
      right: 16px;
      top: 8px;
      border: none;
      background: transparent;
      font-size: 24px;
      color: #b4c0c1;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
    &.responsive {
      @media (min-width: 576px) {
        max-width: 500px;
        margin-left: auto;
        margin-right: auto;
      }
      @media (min-width: 992px) {
        max-width: 800px;
      }
    }
    &.small {
      max-width: 500px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  padding-top: 0;
  transition: opacity .25s ease-in-out, padding .35s ease-in-out;
}
.fade-enter, .fade-leave-to {
  padding-top: 150px;
  opacity: 0;
}
</style>

<style>
.vsm-overflow-hidden {
  overflow: hidden;
}

.vsm-overflow-hidden-ipad {
  position: fixed;
  width: 100%;
}
</style>
