import React from 'react'
import DarkMode from './icons/DarkMode'
import Menu from './icons/Menu'

const Header = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-center shadow">
        <div className="w-full max-w-5xl">
          <div className="flex justify-between py-3 items-center w-full px-4 md:px-2">
            <button id="ham-b" className="text-black w-7 sm:w-8">
              <Menu />
            </button>

            <div id="decription">
              <div className="flex flex-col items-center justify-center">
                <h2 className="font-bold sm:text-lg text-sm">Joachim Chikezie</h2>
                <h2 className="font-normal sm:text-sm text-xs">
                  Software Engineer {'&'} UX/UI Designer
                </h2>
              </div>
            </div>

            <button id="theme-toggle" className="text-black w-6 sm:w-8">
              <DarkMode />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
