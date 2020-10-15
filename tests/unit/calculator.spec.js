import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  });
  it('subracts from total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  });
  it('multiplies total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5')
    expect(wrapper.vm.runningTotal).to.equal(15)
  })
  it('divide total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7')
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
  it('concatenates numbers together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick('1')
    wrapper.vm.numberClick('2')
    expect(wrapper.vm.runningTotal).to.equal(12)
  })
  it('chains mupltiple operations together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick('1')
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick('2')
    wrapper.vm.operatorClick('-')
    wrapper.vm.numberClick('2')
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.runningTotal).to.equal(1)
  })
  it('clears click but keeps sum', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick('1')
    wrapper.vm.operatorClick('+')
    wrapper.vm.numberClick('2')
    wrapper.vm.operatorClick('=')
    wrapper.vm.clearClick()
    expect(wrapper.vm.runningTotal).to.equal(0)
    expect(wrapper.vm.previousTotal).to.equal(3)

  })
  
})
