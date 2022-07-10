import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ComponentType, ReactElement, ReactNode } from 'react'

export type PageLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
  Layout?: ComponentType
}

export type MyAppProps = AppProps & {
  Component: PageLayout
}
