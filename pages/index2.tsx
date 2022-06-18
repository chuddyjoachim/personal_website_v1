import React from 'react'
import Header from '../components/Header2'
import Banner from '../assets/images/banner.png'
import BannerTitle from '../assets/images/benner-title.png'
import HomeImage from '../assets/images/home-image.png'
import Joachim from '../assets/images/Joachim-22.jpg'

import NextImage from 'next/image'
import NextLink from 'next/link'
import LinkIcon from '../components/icons/LinkIcon'
import UiTab from '../components/tabs/hometabs/UiTab'
import DevTab from '../components/tabs/hometabs/DevTab'
import PostTab from '../components/tabs/hometabs/PostTab'
import EnterIcon from '../components/icons/Enter'

const Home = () => {
  return (
    <>
      <main>
        <Header />
        {/* image banner */}
        <div
          id="home-banner"
          className="h-56 md:h-72 bg-banner-grey bg-opacity-20 relative overflow-hidden flex justify-center items-center px-3"
        >
          {/* <div className="relative"> */}
          <NextImage src={BannerTitle} />
          {/* </div> */}
        </div>
        {/* display image and intro */}
        <div className="w-full flex justify-center my-12">
          <div className="flex flex-col md:flex-row space-x-3 w-full max-w-2xl">
            <div className="w-72 self-center">
              <NextImage src={HomeImage} className="w-full" />
            </div>
            <div className="blobk text-custom-text px-2 pt-6">
              <h1 className="custom-black text-3xl font-bold mb-2">Yo, I’m joachim ⚡</h1>
              <h3 className="text-base font-medium my-2">
                Still on the tech train, meanwhile i code and design.
              </h3>
              <p className="flex mb-1">
                <div className="w-6 relative">
                  <EnterIcon />
                </div>
                <span>
                  See more about me{' '}
                  <NextLink href={'/about'}>
                    <span className="underline font-medium cursor-pointer">@About page</span>
                  </NextLink>
                </span>
              </p>
              <p className="flex mb-1">
                <div className="w-6 relative">
                  <EnterIcon />
                </div>
                <span>
                  View my awesome coding repos{' '}
                  <NextLink href={'/about'}>
                    <span className="underline font-medium cursor-pointer">@Github</span>
                  </NextLink>
                </span>
              </p>
              <p className="flex mb-1">
                <div className="w-6 relative">
                  <EnterIcon />
                </div>
                <span>
                  Explore my ux/ui designs {'&'} casestudies{' '}
                  <NextLink href={'/about'}>
                    <span className="underline font-medium cursor-pointer">@Behance</span>
                  </NextLink>
                  {' & '}
                  <NextLink href={'/about'}>
                    <span className="underline font-medium cursor-pointer">@Dribbble</span>
                  </NextLink>
                </span>
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <h1 className="text-center font-bold text-3xl text-custom-black my-5">Featured Projects</h1>
        <section className="w-full flex flex-row justify-center relative">
          <div className="w-full max-w-5xl px-4 md:px-2">
            <UiTab />
            <div className="mt-20">
              <DevTab />
            </div>
            <div className="mt-20">
              <PostTab />
            </div>
          </div>
        </section>
        <div>Home</div>
      </main>
    </>
  )
}

export default Home
