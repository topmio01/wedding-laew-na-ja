import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

const HelloWorld = defineComponent({
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  template: '<div>{{ msg }}</div>',
})

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
