import Head from 'next/head'
import Navbar from '../Navbar'

const Main = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Daniel Slattery - Homepage</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>👨‍💻</text></svg>"
        />
      </Head>
      <Navbar />
      {children}
    </div>
  )
}

export default Main
