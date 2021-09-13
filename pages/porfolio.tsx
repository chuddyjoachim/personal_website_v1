import React, { useContext } from 'react'
import Allwork from '../components/allwork'
import Developement from '../components/developement'
import Header from '../components/header'
import UiDesign from '../components/uidesign'
import { pTabContext } from '../context/portfolioTabContext'

const Portfolio = (): JSX.Element => {
  /* get context values */
  const { portfolioTabs, setPortfolioTab } = useContext(pTabContext)

  /* set tabs to display click*/
  const setTabs = (tabsOption: typeof portfolioTabs) => {
    setPortfolioTab(tabsOption)
  }

  return (
    <>
      <Header page="portfolio" />
      <div className="transition flex justify-center item-center w-screen bg-white dark:bg-blueGray-900">
        <div className="max-w-4xl w-full">
          <div className="wrappset__ transition bg-white dark:bg-blueGray-900 text-gray-800 dark:text-gray-300 w-full min-h-screen">
            <div className="flex flex-row item-center py-4 sticky top-0">
              <button
                className={
                  portfolioTabs == 'all'
                    ? 'button__ font-semibold transition px-3 py-1 mr-0.5 uppercase text-xs leading-6 tracking-widest border-b-2 rounded-sm text-green-600 dark:text-green-300 border-green-600 dark:hover:text-green-300  hover:text-green-600 hover:border-green-600 dark:hover:border-green-300 dark:border-green-300 '
                    : 'button__ font-semibold transition px-3 py-1 mr-0.5 uppercase text-xs leading-6 tracking-widest border-b-2 rounded-sm dark:border-gray-200 border-gray-300 dark:hover:text-green-300  hover:text-green-600 hover:border-green-600 dark:hover:border-green-300 '
                }
                onClick={() => {
                  setTabs('all')
                }}
              >
                ALL
              </button>
              <button
                className={
                  portfolioTabs == 'dev'
                    ? 'button__ font-semibold transition px-3 py-1 mr-0.5 uppercase text-xs leading-6 tracking-widest border-b-2 rounded-sm text-green-600 dark:text-green-300 border-green-600 dark:hover:text-green-300  hover:text-green-600 hover:border-green-600 dark:hover:border-green-300 dark:border-green-300 '
                    : 'button__ font-semibold transition px-3 py-1 mr-0.5 uppercase text-xs leading-6 tracking-widest border-b-2 rounded-sm dark:border-gray-200 border-gray-300 dark:hover:text-green-300  hover:text-green-600 hover:border-green-600 dark:hover:border-green-300 '
                }
                onClick={() => {
                  setTabs('dev')
                }}
              >
                DEV
              </button>
              <button
                className={
                  portfolioTabs == 'ui'
                    ? 'button__ font-semibold transition px-3 py-1 mr-0.5 uppercase w-24 text-xs leading-6 tracking-widest border-b-2 rounded-sm text-green-600 dark:text-green-300 border-green-600 dark:hover:text-green-300  hover:text-green-600 hover:border-green-600 dark:hover:border-green-300 dark:border-green-300 '
                    : 'button__ font-semibold transition px-3 py-1 mr-0.5 uppercase w-24 text-xs leading-6 tracking-widest border-b-2 rounded-sm dark:border-gray-200 border-gray-300 dark:hover:text-green-300  hover:text-green-600 hover:border-green-600 dark:hover:border-green-300 '
                }
                onClick={() => {
                  setTabs('ui')
                }}
              >
                DESIGN
              </button>
            </div>
            <h1 className="h-full py-7 flex justify-center items-center relative">
              NoT LiStEd yEt
            </h1>

            <h1 className="h-full py-7 flex justify-center items-center relative">
              {portfolioTabs == 'all' ? (
                <Allwork />
              ) : portfolioTabs == 'dev' ? (
                <Developement />
              ) : portfolioTabs == 'ui' ? (
                <UiDesign />
              ) : (
                ''
              )}
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}
export default Portfolio
