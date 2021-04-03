import { defineFeature, loadFeature } from 'jest-cucumber'
import Counter from '../../components/Counter'
import TestRenderer from 'react-test-renderer'

const feature = loadFeature('./src/features/counter.feature')

defineFeature(feature, test => {
  test('showing 0 initially', ({ given, when, then }) => {
    let testInstance: TestRenderer.ReactTestInstance

    given('mount counter', () => {
      const testRenderer = TestRenderer.create(<Counter />)
      testInstance = testRenderer.root
    })

    when('initially', () => {
      // INITIALLY
    })

    then('showing 0', () => {
      const divInstance = testInstance.findByProps({ id: 'root-counter' })
      expect(divInstance.props.children).toBe('0')
    })
  })

  test('clicking - decrements', ({ given, when, then }) => {
    let testInstance: TestRenderer.ReactTestInstance

    given('mount counter', () => {
      const testRenderer = TestRenderer.create(<Counter />)
      testInstance = testRenderer.root
    })

    when('clicking -', () => {
      const buttonInstance = testInstance.findByProps({ children: '-' })
      buttonInstance.props.onClick()
    })

    then('showing -1', () => {
      const divInstance = testInstance.findByProps({ id: 'root-counter' })
      expect(divInstance.props.children).toBe('-1')
    })
  })

  test('clicking + decrements', ({ given, when, then }) => {
    let testInstance: TestRenderer.ReactTestInstance

    given('mount counter', () => {
      const testRenderer = TestRenderer.create(<Counter />)
      testInstance = testRenderer.root
    })

    when('clicking +', () => {
      const buttonInstance = testInstance.findByProps({ children: '+' })
      buttonInstance.props.onClick()
    })

    then('showing 1', () => {
      const divInstance = testInstance.findByProps({ id: 'root-counter' })
      expect(divInstance.props.children).toBe('1')
    })
  })
})