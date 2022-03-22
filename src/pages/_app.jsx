import '../styles/globals.scss'
import Head from 'next/head'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Welcome</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
