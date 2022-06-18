import React from 'react'
import NextImage from 'next/image'
import flexImage from '../../assets/images/ex-ex.png'
import LinkIcon from '../icons/LinkIcon'

const NewRtlCard = () => {
  return (
    <>
      <div>
        <div className="flex flex-col sm:flex-row-reverse ">
          <div className="img-- w-full sm:w-1/2 sm:rounded-r-xl">
            <NextImage src={flexImage} className="sm:rounded-r-xl" />
          </div>
          <div className="content__ flex-1 border border-gray-200 mb-1.5 sm:border-r-0 sm:rounded-l-xl">
            <div className="wrapper px-1.5 md:px-6 flex flex-col w-full h-full">
              <div className="flex-1 flex flex-col justify-center py-2">
                <h1 className="title text-xl md:text-3xl h-1/5 overflow-hidden w-full  font-bold mb-3 text-custom-dark-blue">
                  Flex vest finance app
                </h1>
                <p className="dcs text-custom-gray text-sm md:text-base h-1/3 overflow-hidden ">
                  Banking and finance app designed to make savings and investment simplified{' '}
                </p>
              </div>
              <ul className="py-4">
                <li>
                  <a href="" className="text-blue-600 flex space-x-2 items-center">
                    <span className="font-medium">View on Behance</span>
                    <span className="w-3.5">
                      <LinkIcon />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewRtlCard
