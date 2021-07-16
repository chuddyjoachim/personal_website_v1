import React, { createContext, FC, useEffect, useState } from 'react'
import { themeContextType, themeType } from '../lib/types'

export const themeContext = createContext<themeContextType>({
  theme: 'light',
  setThemeHandler: () => {},
})

const ThemeContextProvider: FC = ({ children }) => {
  const themeKey = 'theme'
  let initThemeValue: themeType = 'light'

  const setThemeToLocalStorage = (key: string, value: themeType) => {
    localStorage.removeItem(themeKey)
    try {
      localStorage.setItem(key, value)
    } catch (error) {
      console.error('could not change theme')
    }
  }

  const [theme, setTheme] = useState<themeType>(() => {
    try {
      /* Get themeValue from local storage by key */
      const item = localStorage.getItem(themeKey) as themeType

      return item ? item : initThemeValue
    } catch (error) {
      /* return initial value if error */
      return initThemeValue
    }
  })

  useEffect(() => {
    setThemeToLocalStorage(themeKey, theme)
    theme === 'dark'
      ? document.getElementsByTagName('html')[0].classList.add('dark')
      : theme === 'light'
      ? document.getElementsByTagName('html')[0].classList.remove('dark')
      : ''
  }, [theme])

  const setThemeHandler = () => {
    theme == 'light' ? setTheme('dark') : theme == 'dark' ? setTheme('light') : ''
    //   return void;
  }

  return (
    <themeContext.Provider value={{ theme, setThemeHandler }}>{children}</themeContext.Provider>
  )
}

export default ThemeContextProvider
