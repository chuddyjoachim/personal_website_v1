/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
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
        Hi 👋 , i'm <strong>JOACHIM</strong> a frontend developer, with experience in developing{' '}
        <strong>WEB</strong> and <strong>MOBILE</strong> applications.
      </h1>
      <h1 className="text-center">
        I also engage in <strong>UX/UI/PRODUCT Design</strong>, I have a wide range of knowledge in
        Design principles and concept, and also have attained proficiency in using design tools such
        as <strong>Adobe XD</strong>, <strong>Figma</strong> e.t.c.
      </h1>
      {/* <Link passHref href="/porfolio">
        <div className="flex items-center justify-center cursor-pointer shadow">
          <p className="p-1 px-3 flex w-auto bg-green-300 text-white items-center justify-center mt-2">
            View Portfolio <span className="text-2xl">↗</span>{' '}
          </p>
        </div>
      </Link> */}
    </motion.div>
  </PageWrapper>
)
export default About
