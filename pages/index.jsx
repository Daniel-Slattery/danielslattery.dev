import dynamic from 'next/dynamic'
import CustomLoader from '../components/CustomLoader'

const LaptopScene = dynamic(() => import('../components/LaptopScene'), {
  ssr: false,
  loading: () => <CustomLoader />
})

const Home = () => <LaptopScene />

export default Home
