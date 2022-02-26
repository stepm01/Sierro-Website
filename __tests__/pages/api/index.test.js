import apiIndexHandler from '../../../src/pages/api'

it('should run on node env', async function () {
  const jsonSpy = jest.fn()
  const statusSpy = jest.fn().mockReturnValue({ json: jsonSpy })

  const result = await apiIndexHandler({}, { status: statusSpy })

  expect(result).toBeUndefined()
  expect(statusSpy).toBeCalledTimes(1)
  expect(statusSpy).toBeCalledWith(200)
  expect(jsonSpy).toBeCalledTimes(1)
  expect(jsonSpy).toBeCalledWith({ status: 'OK' })
})
