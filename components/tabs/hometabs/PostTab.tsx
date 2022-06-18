import React from 'react'
import NextLink from 'next/link'
import HomeBlogCards from '../../projectcard/HomeBlogCards'

const PostTab = () => {
  return (
    <>
      <div>
        <div className="top">
          <div className="head">
            <div className="flex justify-between text-white bg-custom-black py-4 px-3 font-bold text-sm sm:text-base rounded-sm">
              <h2 className="">Blog | Dev.to | Medium | UX Writings | Tech Blog | code Blog</h2>
              <button className="text-blue-600 w-20">
                <NextLink href={'/design'}>View all </NextLink>
              </button>
            </div>
          </div>
          <div className="tab_body mt-3 w-full overflow-x-scroll scrollbar-hide">
            <div className="flex min-w-min space-x-3.5 py-2 pl-2 overflow-x-scroll scrollbar-hide">
                <HomeBlogCards />
                <HomeBlogCards />
                <HomeBlogCards />
                <HomeBlogCards />
                <HomeBlogCards />
                <HomeBlogCards />
                <HomeBlogCards />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostTab
