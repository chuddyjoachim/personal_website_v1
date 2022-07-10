import React, { FC } from 'react'
import Navbar from '../Navbar'

const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
        <main className="container">{children}</main>
      </div>
    </>
  )
}

export default DefaultLayout
