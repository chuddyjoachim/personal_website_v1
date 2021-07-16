const themetype = ['light', 'dark'] as const
const iconArray = ['github', 'linkedin', 'dev', 'twitter', 'dribble'] as const

interface themeContextInterface {
  theme: 'light' | 'dark'
  setThemeHandler?: () => void | any
}

export type themeType = typeof themetype[number]
export type iconType = typeof iconArray[number]

export type themeContextType = themeContextInterface
