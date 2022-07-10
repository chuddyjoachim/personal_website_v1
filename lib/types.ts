const themetype = ['light', 'dark'] as const
const iconArray = [
  'github',
  'linkedin',
  'dev',
  'twitter',
  'dribble',
  'behance',
  'instagram',
  'link',
] as const
const pageArray = ['home', 'portfolio'] as const
const pageTabsArray = ['all', 'ui', 'dev'] as const
const sizeArray = ['xs', 'sm', 'md', 'lg'] as const

/* interfaces */
interface themeContextInterface {
  theme: themeType
  setThemeHandler?: () => void | null
}
interface portfolioTabInterface {
  portfolioTabs: pageTabstype
  setPortfolioTab: (x: pageTabstype) => void
}

/* types */
export type themeType = typeof themetype[number]
export type iconType = typeof iconArray[number]
export type pagetype = typeof pageArray[number]
export type pageTabstype = typeof pageTabsArray[number]
export type sizeType = typeof sizeArray[number]

export type themeContextType = themeContextInterface
export type pageTabContextType = portfolioTabInterface
