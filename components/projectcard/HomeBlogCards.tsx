import React from 'react'
import NextLink from 'next/link'
import LinkIcon from '../icons/LinkIcon'

const HomeBlogCards = () => {
  return (
    <>
      <div className="shadow w-60 rounded">
        <div className="block">
          <div className="px-5 py-2">
            <h2 className="block text-sm mt-4 text-custom-black font-bold">
              Mobility.xo - A UX case study
            </h2>
            <p className=" text-custom-gray text-sm border-b h-30 overflow-hidden py-4">
              Banking and finance app designed to make savings and investment simplified, you know
              just to idemnify the fault in our stars.
            </p>
            <div className="my-2 flex flex-row items-center space-x-2">
              <p className="py-1.5 px-2 text-xs font-medium rounded bg-green-100">UI/UX</p>
              <p className="py-1.5 px-2 text-xs font-medium rounded bg-red-100">UX design</p>
            </div>
            <div className="flex justify-end my-2">
              <a href="" className="text-blue-600 flex space-x-2 items-center">
                <span className="text-sm font-medium">Medium</span>
                <span className="w-3.5">
                  <LinkIcon />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeBlogCards
