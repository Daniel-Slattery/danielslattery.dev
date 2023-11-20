import Head from 'next/head'
import Navbar from '../Navbar'

const Main = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Daniel Slattery - Homepage</title>
      </Head>
      <Navbar />
      {children}
    </div>
  )
}

export default Main
