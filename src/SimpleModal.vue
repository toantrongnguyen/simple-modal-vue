<template lang="pug">
  transition(name="fade")
    div.vsm(v-show="isDisplay" tabindex="-1" @click.self="close" @keyup.esc="close" ref="modal")
      div.vsm-modal(:class="size")
        button.btn-close(v-if="hasButtonClose" type="button" @click="close")
          span(aria-hidden="true") &times;
        div.vsm-modal-header(v-if="title")
          h4.title {{ title }}
        div.vsm-modal-header(v-else-if="customHeader")
          slot(name="header")
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

    customHeader: {
      type: Boolean,
      default: false,
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

    keepModal: {
      type: Boolean,
      default: true,
    },
  },

  data: () => ({
    scrollBarWidth: 0,
  }),

  computed: {
    isIpad() {
      const userAgent = window.navigator.userAgent.toLowerCase()
      return /ipad/.test(userAgent)
    },

    isDisplay() {
      return this.value
    },
  },

  watch: {
    value() {
      setTimeout(() => {
        this.$emit(this.value ? 'onOpen' : 'onClose')
      }, this.DELAY_EFFECT)
      if (this.isIpad) {
        this.disableScrollOnIpad(this.value)
        return
      }
      if (this.value) {
        this.setScrollPadding()
        document.body.classList.add('vsm-overflow-hidden')
      } else {
        setTimeout(() => {
          this.removeScrollPadding()
          document.body.classList.remove('vsm-overflow-hidden')
        }, this.DELAY_EFFECT)
      }
    },
  },

  created() {
    this.DELAY_EFFECT = 300
    const div = document.createElement('div')
    div.className = 'vsm-scrollbar-measure'
    document.body.appendChild(div)
    const scrollBarWidth = div.offsetWidth - div.clientWidth
    this.scrollBarWidth = scrollBarWidth
    document.body.removeChild(div)
  },

  methods: {
    open() {
      this.$emit('input', true)
    },

    close() {
      this.$emit('input', false)
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

    checkBodyOverflowing() {
      const rect = document.body.getBoundingClientRect()
      return rect.left + rect.right < window.innerWidth
    },

    setScrollPadding() {
      this.isBodyOverflowing = this.checkBodyOverflowing()
      if (this.isBodyOverflowing) {
        document.body.style.paddingRight = `${this.scrollBarWidth}px`
      }
    },

    removeScrollPadding() {
      document.body.style.paddingRight = 0
    },

    setAdjustDialog() {
      const { modal } = this.$refs
      const isModalOverflowing = modal.scrollHeight > document.documentElement.clientHeight
      console.log(isModalOverflowing, modal.scrollHeight, document.documentElement.clientHeight)
      if (!this.isBodyOverflowing && isModalOverflowing) {
        modal.style.paddingLeft = `${this.scrollBarWidth}px`
      }

      if (this.isBodyOverflowing && !isModalOverflowing) {
        modal.style.paddingRight = `${this.scrollBarWidth}px`
      }
    },

    removeAdjustDialog() {
      this.$refs.modal.style.paddingLeft = 0
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
    bottom: 0;
    z-index: 1050;
    background: rgba(0, 0, 0, 0.5);
    overflow: auto;
  }

  &-modal {
    box-sizing: border-box;
    margin: 50px auto 16px;
    margin-top: 50vh;
    transform: translateY(-50%);
    background: white;
    border-radius: 4px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    width: auto;
    margin-left: 16px;
    margin-right: 16px;

    &-body,
    &-footer,
    &-header {
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

.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease-in;
}

.fade-enter,
.fade-leave-to {
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

.vsm-scrollbar-measure {
  width: 100px;
  height: 100px;
  overflow: scroll;
  position: absolute;
  top: -9999px;
}
</style>
