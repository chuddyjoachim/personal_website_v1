import React, { createContext, FC, useState } from 'react'
import { pageTabContextType, pageTabstype } from '../lib/types'

export const pTabContext = createContext<pageTabContextType>({
  portfolioTabs: 'all',
  setPortfolioTab: () => {},
})

const PTabContextProvider: FC = ({ children }) => {

  let initioalValue = 'dev' as pageTabstype

  const [portfolioTabs, setPortfolioTab] = useState<pageTabstype>(() => {
    return initioalValue
  })

  return (
    <pTabContext.Provider value={{ portfolioTabs, setPortfolioTab }}>
      {children}
    </pTabContext.Provider>
  )
}

export default PTabContextProvider
