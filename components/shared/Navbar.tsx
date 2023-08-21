import React, { FC, useContext } from 'react'
import Link from '../global/Link'
import { FiChevronLeft, FiMoon, FiSun } from 'react-icons/fi'
import { themeContext } from '../../context/ThemeContext'

interface NavBarProps {
  title?: string
  showBackButton?: boolean
  onBack?: () => void
}

const Nav: FC<NavBarProps> = ({ showBackButton = false, onBack, title }) => {
  const { theme, setThemeHandler } = useContext(themeContext)

  return (
    <>
      <div className="container">
        <nav className="flex justify-between items-center text-xs py-8 text-black dark:text-slate-100 transition-all ">
          {showBackButton && (
            <button className="p-3" onClick={onBack}>
              <FiChevronLeft size={20} />
            </button>
          )}
          {!showBackButton && (
            <ul className="flex items-center space-x-5 uppercase">
              <li className="">
                <Link to="/">
                  <p className="font-medium">Portfolio</p>
                </Link>
              </li>
              <li className="">
                <Link to="/">
                  <p className="font-medium">Contact</p>
                </Link>
              </li>
              <li className="">
                <Link to="/">
                  <p className="font-medium">Resume</p>
                </Link>
              </li>
            </ul>
          )}
          {!!title && showBackButton && <p className="font-semibold uppercase">{title}</p>}
          <button onClick={setThemeHandler} className="text-lg p-2 text-black dark:text-slate-200">
            {theme === 'light' && <FiMoon size={18} />}
            {theme === 'dark' && <FiSun size={18} />}
          </button>
        </nav>
      </div>
    </>
  )
}

export default Nav
