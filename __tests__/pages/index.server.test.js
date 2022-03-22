import { getServerSideProps } from '../../src/pages'

it('should run on node env', async function () {
  const res = await getServerSideProps()

  expect(res).toStrictEqual({
    props: {
      greeting: 'Welcome to Mamble',
    },
  })
})
