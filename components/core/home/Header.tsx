import React, { useState } from 'react'
import { FiDribbble, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FaBehance, FaCode, FaPen } from 'react-icons/fa'
import { PiNotepadBold, PiNotepadThin } from 'react-icons/pi'
import Link from '../../global/Link'
import Button from '../../global/Button'
import { AnimatePresence } from 'framer-motion'
import PortfolioPop from '../../core/portfolio/PortfolioPop'

const socials = [
  { link: 'https://github.com/chuddyjoachim', icon: <FiGithub size={18} />, isExternal: true },
  //   { link: 'https://dribbble.com/chuddyjoachim', icon: <FiDribbble size={18} />, isExternal: true },
  { link: 'https://twitter.com/chuddyjoachim', icon: <FiTwitter size={18} />, isExternal: true },
  //   { link: 'https://www.behance.net/chuddyjoachim', icon: <FaBehance size={18} />, isExternal: true },
  {
    link: 'https://www.linkedin.com/in/chuddyjoachim/',
    icon: <FiLinkedin size={18} />,
    isExternal: true,
  },
]

const Header = () => {
  const [isOptionOpen, setIsOptionOpen] = useState(false)

  return (
    <div>
      <div className="flex flex-col-reverse lg:flex-row transition-all items-center">
        <div className="w-full lg:flex-[1.8] flex flex-col items-center lg:items-start space-y-4">
          <div className="font-semibold text-5xl  text-center lg:text-left leading-tight mt-8 dark:text-slate-100 w-4/5 lg:w-auto">
            <h1 className="lg:leading-none leading-[1.1]">
              🖖Hey there!{' '}
              <span className=" font-semibold text-5xl  text-center lg:text-left leading-tight">
                I'm Joachim
              </span>
            </h1>
          </div>
          <div className="py-7">
            <p className="text-sm md:text-base font-normal lg:text-base mb-3 text-gray-400 dark:text-gray-300 ">
              A Product-oriented software engineer with over 4+ years of experience and deep focus
              in frontend engineering,
            </p>
            <p className="text-sm md:text-base font-normal lg:text-base mb-2 text-gray-400 dark:text-gray-300 ">
              In my journey so far I've Lead various frontend engineering roles with extensive
              experience in building and maintaining complex frontend systems this includes design
              systems, payment SDK, as well as backend technologies.
            </p>
            <p className="text-sm md:text-base font-normal lg:text-base mb-2 text-gray-400 dark:text-gray-300 ">
              I possess a keen eye for detail and consistent focus on creating high quality
              user-centered solution and user-friendly interfaces for web and mobile applications
              leveraging deep understanding of design thinking,
            </p>
            <p className="text-sm md:text-base font-normal lg:text-base mb-2 text-gray-400 dark:text-gray-300 ">
              contributed to open-source projects, freelance projects and developed mobile
              applications.
            </p>
            <p className="text-sm hidden md:text-base font-normal lg:text-base mb-2 text-gray-400 dark:text-gray-300 ">
              A creative Software Engineer Experienced in building beautiful interfaces for web and
              mobile applications, extensive knowledge in design thinking, and also have attained
              proficiency in using design tools.
              <br />
              Experienced with the Software Development Life Cycle, which includes designing and
              implementing, debugging, and maintaining the application software ad capable of
              working in a variety of culture and dynamic settings.
            </p>
          </div>
          <div className="">
            <div className=" flex flex-row justify-center lg:justify-start space-x-6 text-2xl font-light dark:text-white  opacity-40 dark:opacity-80">
              {socials.map((s, i) => (
                <div key={i}>
                  <Link to={s.link} isExternal={s.isExternal}>
                    {s.icon}
                  </Link>
                </div>
              ))}
            </div>
            <div className="py-10">
              {/* <small className=" text-xl font-semibold underline underline-offset-2 dark:text-white text-center block">Explore:</small> */}
              <div className="flex gap-4 mt-3">
                <div className="">
                  <Button
                    type="button"
                    size="md"
                    className="font-bold select-none border-2 border-purple-x-900"
                    rightIcon={<FaCode />}
                    onClick={() => setIsOptionOpen((v) => !v)}
                  >
                    Work
                  </Button>
                </div>
                <div className="">
                  <Button
                    type="button"
                    variant="outlined"
                    size="md"
                    className="font-bold select-none dark:text-gray-50 dark:border-gray-50"
                    rightIcon={<PiNotepadBold size={18} />}
                    onClick={() => setIsOptionOpen((v) => !v)}
                  >
                    Articles
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-1">
          <div className="border-purple-x-300 border h-64 w-56 rounded-md relative">
            <div className="flex-1 absolute w-full h-full top-2 left-2 -z-10 rounded-md border border-purple-x-400"></div>
            <div className="relative flex-1 flex justify-center items-center h-full p-6">
              <img
                src="/images/avatar/jo1.png"
                alt="avatar"
                className="w-11/12 h-11/12 object-cover "
              />
            </div>
          </div>
        </div>
        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {isOptionOpen && <PortfolioPop onClose={() => setIsOptionOpen((v) => !v)} />}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Header
