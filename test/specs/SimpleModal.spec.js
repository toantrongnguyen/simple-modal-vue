import Vue from 'vue'
import SimpleModal from '@/SimpleModal'
import { shallowMount, mount } from '@vue/test-utils'

describe('SimpleModal.vue', () => {
  it('should hide modal when no value pass', () => {
    const wrapper = shallowMount(SimpleModal)
    expect(wrapper.find('div').exists()).toBeFalsy()
  })

  it('should show modal when value pass true', () => {
    const props = { value: true }
    const wrapper = shallowMount(SimpleModal, { propsData: props })
    expect(wrapper.find('div').exists()).toBeTruthy()
  })

  it('should toggle class', () => {
    document.body.classList.add = jest.fn()
    document.body.classList.remove = jest.fn()
    const wrapper = mount(SimpleModal, { propsData: { value: false } })
    wrapper.setProps({ value: true })
    expect(global.document.body.classList.add).toBeCalled()
    wrapper.setProps({ value: false })
    expect(global.document.body.classList.remove).toBeCalled()
  })

  it('should close button works properly', () => {
    const wrapper = mount(SimpleModal, { propsData: { value: true } })
    wrapper.find('.btn-close').trigger('click')
    expect(wrapper.emitted().input[0][0]).toBeFalsy()
  })

  it('should call disableScrollOnIpad on ipad', () => {
    navigator.__defineGetter__('userAgent', function() {
      return 'ipad'
    })
    const disableScrollOnIpad = jest.fn()
    const wrapper = mount(SimpleModal, { propsData: { value: false } })
    wrapper.setMethods({ disableScrollOnIpad })
    wrapper.setProps({ value: true })
    expect(disableScrollOnIpad).toBeCalled()
  })

  it('should toggle disableScroll on Ipad', () => {
    navigator.__defineGetter__('userAgent', function() {
      return 'ipad'
    })
    const wrapper = mount(SimpleModal, { propsData: { value: false } })
    document.body.classList.add = jest.fn()
    document.body.classList.remove = jest.fn()
    const scrollTop = 100
    document.documentElement.scrollTop = scrollTop
    wrapper.setProps({ value: true })
    expect(document.body.classList.add).toBeCalled()
    expect(document.body.style.top).toEqual(`-${scrollTop}px`)
    wrapper.setProps({ value: false })
    expect(document.body.classList.remove).toBeCalled()
  })
})
