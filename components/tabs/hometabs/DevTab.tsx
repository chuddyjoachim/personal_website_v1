import React, { useState } from 'react'
import NextLink from 'next/link'
import NewRtlCard from '../../projectcard/newRtlCard'

const DevTab = () => {
  const [activeTab, setActiveTab] = useState<number>(1)

  const setTabsFn = (tabNumber: number) => {
    setActiveTab(tabNumber)
  }
  return (
    <>
       <div>
        <div className="top">
          <div className="head">
            <div className="flex justify-between bg-green-100 py-4 px-3 font-bold text-sm sm:text-base rounded-sm">
              <h2 className="">Software | Web | Mobile  developement</h2>
              <button className="text-blue-600 w-20">
                <NextLink href={'/design'}>View all </NextLink>
              </button>
            </div>
          </div>
          <div className="tab_btn mt-2 text-sm sm:text-base">
            <div className="flex space-x-2 py-2 px-2 bg-gray-50">
              {/* <button className="flex-1 flex font-semibold justify-center items-center py-5 bg-white">
                <p className="">Case studies</p>
              </button> */}
              <button
                className={
                  [activeTab == 1 ? ` bg-white` : 'bg-transparent'] +
                  ' flex-1 flex font-semibold justify-center items-center py-3 sm:py-5 transition-all'
                }
                onClick={() => setTabsFn(1)}
              >
                <p className="">Projects</p>
              </button>
              <button
                className={
                  [activeTab == 2 ? ` bg-white` : 'bg-transparent'] +
                  ' flex-1 flex font-semibold justify-center items-center py-3 sm:py-5 transition-all'
                }
                onClick={() => setTabsFn(2)}
              >
                <p className="">Others | Minors</p>
              </button>
            </div>
          </div>
          <div className="tab_body mt-3">
            {/* {
              activeTab == 1? ('1tabber') : activeTab == 2? ('2 tabber') : ''
            } */}
            <NewRtlCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default DevTab
