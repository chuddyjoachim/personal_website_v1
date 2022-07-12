import React, { useState } from 'react'
import { FiDribbble, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FaBehance } from 'react-icons/fa'
import { HiChevronRight } from 'react-icons/hi'
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
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4">
          <div className="font-semibold text-5xl md:text-7xl text-center lg:text-left leading-tight mt-8 dark:text-slate-100 w-4/5 lg:w-auto">
            <h1 className="lg:leading-none leading-[1.1]">
              Hi{' '}
              <span className="lg:block font-semibold text-5xl md:text-7xl text-center lg:text-left leading-tight">
                I'm Joachim
              </span>
            </h1>
          </div>
          <p className=" lg:text-xl py-7 text-gray-500 dark:text-gray-300 text-center lg:text-left">
            A creative Web and Mobile Engineer capable of working in a variety of culture and dynamic
            settings, Experienced with the Product Development Life Cycle (PDLC), which includes
            designing and implementing, debugging, fixing, and maintaining the application software.
          </p>
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
            <div className="w-52">
              <Button
                type="button"
                block
                size="lg"
                className="mt-6 mb-5 text-xl font-bold select-none"
                rightIcon={<HiChevronRight />}
                onClick={() => setIsOptionOpen((v) => !v)}
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-1">
          <div className="bg-purple-x-300 h-56 w-56 rounded-md relative">
            <div className="flex-1 absolute w-full h-full top-2 left-2 -z-10 rounded-md bg-purple-x-400"></div>
            <div className="relative flex-1 flex justify-center items-center h-full">
              <img src="/images/avatar/memoji-preview.png" alt="avatar" />
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
