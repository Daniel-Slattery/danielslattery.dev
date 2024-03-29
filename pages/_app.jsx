import Layout from '../components/layouts/Main'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {

  return (
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default MyApp
