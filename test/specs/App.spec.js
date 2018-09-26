import Vue from 'vue'
import App from '@/App'
import { shallowMount, mount } from '@vue/test-utils'

describe('App', () => {
  it('should run correctly', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.exists()).toBeTruthy()
  })

  it('should show message hide when modal is hidden', () => {
    const propsData = { isShowModal: false }
    const wrapper = mount(App, { propsData })
    expect(wrapper.find('.message').text()).toEqual('modal is hide')
  })

  it('should show message when modal is showed', () => {
    const propsData = { isShowModal: false }
    const wrapper = mount(App, { propsData })
    wrapper.setData({ isShowModal: true })
    expect(wrapper.find('.message').text()).toEqual('modal is showing')
  })
})
