import React, { FC } from 'react'
import DefaultLayout from '../../shared/layout/DefaultLayout'
import Navbar from '../../shared/Navbar'
import { AnimationProps, motion } from 'framer-motion'
import Button from '../../global/Button'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Loader from '../../global/Loader'

interface PortfolioWorkProps {
  title: string
  onBack?: () => void
}

const PortfolioWork = ({ onBack, title }: PortfolioWorkProps) => {
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
  return (
    <>
      <div>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed w-full h-full bg-white dark:bg-purple-x-900 !m-0 p-0 justify-center flex items-center z-[999] inset-0"
        >
          <div className="w-full h-full">
            <div className="absolute w-full">
              <Navbar showBackButton={true} title={title} onBack={onBack} />
            </div>
            <div className=" container flex flex-col flex-1 pt-20 h-full ">
              <div className="flex-1 flex justify-center items-center">
                <Loader className="text-purple-x-300 dark:text-white" size="lg" />
              </div>
              <div className="py-3">
                <div className="flex justify-center items-center space-x-12">
                  <Button
                    onClick={() => {}}
                    leftIcon={<FiChevronLeft />}
                    size="xs"
                    className="bg-transparent !text-gray-800 dark:!text-white !font-semibold hover:bg-transparent focus:ring-0 focus:ring-transparent focus:ring-opacity-20"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={() => {}}
                    rightIcon={<FiChevronRight />}
                    size="xs"
                    className="bg-transparent !text-gray-800 dark:!text-white !font-semibold hover:bg-transparent focus:ring-0 focus:ring-transparent focus:ring-opacity-20"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

PortfolioWork.Layout = DefaultLayout

export default PortfolioWork
