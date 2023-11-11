import dynamic from 'next/dynamic'

const LaptopScene = dynamic(() => import('../components/LaptopScene'), {
  ssr: false,
  loading: () => <div>...Loading</div>
})

const Home = () => <LaptopScene />

export default Home
