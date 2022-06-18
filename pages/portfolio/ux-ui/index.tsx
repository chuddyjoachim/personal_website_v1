import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import NavUx from '../../../components/core/portfolio/ux/NavUx'
import Link from '../../../components/Link'
import { uxUiProjectData } from '../../../constant/projectData/uxUi'
// import imgg from '../../../assets/images/ex-ex.png'

const imgg = 'ex-ex.png'
const meng = 'meng-landing.png'

const UxUi = () => {
  return (
    <>
      <Head>
        <title>Joachim * UX/UI portfolio</title>
      </Head>

      <main>
        <NavUx />

        <div className="w-full flex flex-row justify-center">
          <div className="container px-4 md:px-2">
            <div className=" mt-10">
              <div className="grid md:grid-cols-2 gap-4 items-center">
                {uxUiProjectData.map((proj) => (
                  <div key={proj.name} className="">
                    <Link to={proj.url} className="relative">
                      <div className="bg-white transition-all duration-300 relative w-full h-[40vh] px-5 py-5 rounded-md flex items-center flex-row shadow border border-green-400">
                        <figure className="absolute rounded-md inset-0 bg-cover bg-center z-0 block w-full h-full overflow-hidden">
                          <img
                            src={`/images/ux-ui/${proj.landingImg}`}
                            className="min-w-full rounded-md"
                          />
                        </figure>
                        <div className="opacity-0 hover:opacity-95 bg-green-500 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">
                          <h2 className="font-medium md:text-[2.65625vw] text-[4.65625vw] text-center">
                            {proj.name}
                          </h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default UxUi
