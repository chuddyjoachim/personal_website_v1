import NextLink from 'next/link'
import React, { FC } from 'react'
import { UrlObject } from 'url'

interface LinkProp {
  to: string | UrlObject
  className?: string
  isExternal?: boolean
}

const Link: FC<LinkProp> = ({ to, children, className, isExternal = false }) => {
  return (
    <>
      {isExternal && (
        <NextLink href={to} passHref target={'_blank'} rel="noreferrer" className={className}>
          {children}
        </NextLink>
      )}
      {!isExternal && (
        <NextLink href={to} className={className}>
          {children}
        </NextLink>
      )}
    </>
  )
}

export default Link
