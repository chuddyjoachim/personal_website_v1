/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'

const About = (): JSX.Element => (
  <PageWrapper>
    <motion.div
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="padding px-4 flex flex-col justify-center items-center"
    >
      <h1 className="text-center mb-4">
        Hi 👋 , i'm <strong>JOACHIM</strong> a proficient full-stack developer, with high end
        experience in developing <strong>WEB</strong> and <strong>MOBILE</strong> applications, And
        also scalable <strong>Backend</strong> services(API services and async mechanism).
      </h1>
      <h1 className="text-center">
        I also made out time to engage in <strong>UX/UI Design</strong>, so far i have a wide range of
        knowledge in Design principles and concept, and also have attained proficiency in using
        design tools such as <strong>Adobe XD</strong>, <strong>Figma</strong> e.t.c.
      </h1>
    </motion.div>
  </PageWrapper>
)
export default About
