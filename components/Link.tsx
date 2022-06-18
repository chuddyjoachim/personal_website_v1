import NextLink, { LinkProps } from 'next/link'
import React from 'react'

interface LinkProp {
  to: string | any | LinkProps
  className?: string
}

const Link: React.FC<LinkProp> = ({ to, children, className }) => {
  return (
    <NextLink href={to}>
      <a className={className}>{children}</a>
    </NextLink>
  )
}

export default Link
