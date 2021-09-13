/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const Contact = (): JSX.Element => (
  <PageWrapper>
    <motion.div
      key="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="padding px-4 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center border border-gray-50  bg-gray-50 dark:border-gray-400 dark:bg-blueGray-700 shadow-inner p-3 rounded-2xl">
        <div className="Shot me a mai">
          <h1 className="font-bold text-3xl mb-4 mt-2">Get In Touch</h1>
        </div>
        <div className="flex justify-center items-start mb-3">
          <span className="transition w-4 h-4 rounded-full bg-blueGray-700 dark:bg-gray-50 mt-1 mr-1"></span>
          <h1 className="text-center  flex-1">
            Shot me a mail 💌 💨 -{' '}
            <a href="mailto:chuddyjoachim@gmail.com">chuddyjoachim@gmail.com</a>
          </h1>
        </div>
        <div className="flex items-start mb-3">
          <span className="transition w-4 h-4 rounded-full bg-blueGray-700 dark:bg-gray-50 mt-1 mr-1"></span>
          <h1 className="text-center flex-1">
            Twitter DM always open 📬 
          </h1>
        </div>
      </div>
      {/* <h1 className="text-center mb-4">
        Hi 👋 , i'm <strong>JOACHIM</strong> a proficient full-stack developer, with high end
        experience in developing <strong>WEB</strong> and <strong>MOBILE</strong> applications, And
        also scalable <strong>Backend</strong> services(API services and async mechanism).
      </h1>
      <h1 className="text-center">
        I also made out time to engage in <strong>UX/UI Design</strong>, so far i have a wide range of
        knowledge in Design principles and concept, and also have attained proficiency in using
        design tools such as <strong>Adobe XD</strong>, <strong>Figma</strong> e.t.c.
      </h1> */}
    </motion.div>
  </PageWrapper>
)
export default Contact
