import Image from 'next/image'
import PageWrapper from '../components/PageWrapper'
import profileImage from '../assets/images/joachim2.jpg'
import { motion } from 'framer-motion'

const Home = (): JSX.Element => (
  <PageWrapper>
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="homeWrapper flex flex-col items-center justify-center"
    >
      <div className="inner_wrap flex flex-col items-center justify-center">
        <div className="image_holder flex items-center justify-center rounded-full mb-2 w-36 h-36 border-4 border-gray-50 shadow-md overflow-hidden transition animate-bounce-slow hover:border-green-500">
          <Image
            src={profileImage}
            className="w-full h-full rounded-full bg-cover"
            alt="al images"
          />
        </div>
        <h1 className="font-semibold text-3xl tracking-widest ">CHIKEZIE JOACHIM</h1>
        <span className="w-28 border-t my-8"></span>
        <h1 className="dev_title text-xl tracking-widest font-light">SOFTWARE DEVELOPER</h1>
      </div>
    </motion.div>
  </PageWrapper>
)
export default Home
