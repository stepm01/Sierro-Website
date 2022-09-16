import '../styles/globals.scss'
import Layout from '../components/layout/Layout'
const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default App
