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
        <NextLink href={to} passHref>
          <a target={'_blank'} rel="noreferrer" href={to as string} className={className}>
            {children}
          </a>
        </NextLink>
      )}
      {!isExternal && (
        <NextLink href={to}>
          <a className={className}>{children}</a>
        </NextLink>
      )}
    </>
  )
}

export default Link
