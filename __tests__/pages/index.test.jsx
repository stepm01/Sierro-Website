import HomePage from '../../src/pages'
import { render } from '@testing-library/react'

it('should run in dom env', function () {
  const page = render(<HomePage greeting={'Hi'} />)

  const { queryByTestId, container } = page
  const greetingElement = queryByTestId('greeting')

  expect(container).toContainElement(greetingElement)
  expect(greetingElement).toHaveTextContent('Hi')
  expect(page).toMatchSnapshot()
})
