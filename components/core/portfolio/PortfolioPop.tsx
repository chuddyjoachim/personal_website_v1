import React, { FC, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { AnimationProps, motion } from 'framer-motion'
import Navbar from '../../shared/Navbar'
import PortfolioWork from './PortfolioWork'

const PortfolioPop: FC<{ onClose: () => {} | void }> = ({ onClose }) => {
  const [viewWork, setViewWork] = useState(false)
  const [item, setItem] = useState('')

  const variants: AnimationProps['variants'] = {
    hidden: { y: '100px', opacity: 0 },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '100px',
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
  }

  const viewWorkClose = () => setViewWork((v) => !v)

  const handleViewWork = (item: string) => {
    setItem(item)
    setViewWork((v) => !v)
  }

  return (
    <div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed w-full h-full bg-white dark:bg-purple-x-900 !m-0 p-0 justify-center flex items-center z-[999] inset-0"
      >
        <div className="w-full h-full">
          <div className="w-full h-full">
            <div className="container h-full relative">
              <div className="absolute w-full">
                <Navbar />
              </div>
              <div className="flex flex-col text-slate-800 dark:text-white w-full h-full">
                <div className="flex-1 flex justify-center items-center">
                  <ul className="flex flex-col justify-center items-center flex-1 tracking-widest">
                    <li
                      onClick={() => handleViewWork('Design')}
                      className="text-3xl opacity-50 font-light hover:scale-75 transition-all cursor-pointer"
                    >
                      Design
                    </li>
                    <li
                      onClick={() => handleViewWork('Web')}
                      className="text-6xl font-semibold my-7 hover:scale-75 transition-all cursor-pointer"
                    >
                      Web
                    </li>
                    <li
                      onClick={() => handleViewWork('mobile')}
                      className="text-3xl opacity-50 font-light hover:scale-75 transition-all cursor-pointer"
                    >
                      Mobile
                    </li>
                  </ul>
                </div>
                <div className="my-5 flex justify-center">
                  <button
                    className="p-5 rounded-full bg-slate-900 dark:bg-purple-x-400 bg-opacity-5"
                    onClick={onClose}
                  >
                    <AiOutlineClose size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {viewWork && <PortfolioWork title={item} onBack={viewWorkClose} />}
    </div>
  )
}

export default PortfolioPop
