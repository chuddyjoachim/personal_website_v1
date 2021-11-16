import React, { FC } from 'react'
import Image from 'next/image'
import netflix from '/assets/projectimages/ui/netflix.jpg'
import Icon from '../icon'
import { iconType } from '../../lib/types'

interface productLinks {
  id: number
  icons: iconType
  url: string
  size: string
}

export interface PrjectCardProps {
  // id: number
  type: string
  title: string
  description: string
  imgUrl: any
  imgBg?: string
  links?: productLinks[]
}
const ProjectCard: FC<PrjectCardProps> = ({ type, title, description, imgUrl, imgBg, links }) => {
  return (
    <>
      <div className="w-full relative shadow-md rounded-md bg-white " id="cardbox">
        <div className=" w-full relative" id="inner">
          <div className="flex flex-row w-full" id="wrapper">
            <div
              className="projectcard_left relative flex justify-center items-center p-0"
              id="left__ "
            >
              <div className="flex relative w-full">
                <Image src={imgUrl} className="object-cover w-full h-full" alt="alimages" />
              </div>
            </div>
            <div
              className="transition flex-1 min-h-full flex items-center relative bg-white fwhite dark:bg-blueGray-700"
              id="right__"
            >
              <div className="py-2 px-2 relative">
                <div className="flex flex-col w-full relative  h-full">
                  <div className="flex ">
                    <div className="py-1 text-xs font-medium" id="tag_">
                      <p className="text-gray-300 dark:text-gray-400 transition">{type.toUpperCase()}</p>
                    </div>
                  </div>
                  <div className="" id="title">
                    <h2 className="my-1 font-medium text-2xl text-gray-700 transition dark:text-gray-50">
                      {title}
                    </h2>
                  </div>
                  <div className="" id="dsc">
                    <p className="leading-tight text-base font-normal my-2 text-gray-400 transition dark:text-gray-200">
                      {description}
                    </p>
                  </div>
                  <div className="flex relative my-3" id="icon-links">
                    <ul className=" flex relative items-center flex-row space-x-3.5">
                      {/* links */}
                      {links
                        ? links.map((link) => (
                            <li key={link.id} className="flex ">
                              <a
                                href={link.url}
                                target="_blank"
                                className=" relative text-gray-400 dark:text-gray-300 dark:hover:text-green-400 hover:text-green-500"
                                rel="noreferrer"
                              >
                                <Icon name={link.icons} width={link.size} />
                              </a>
                            </li>
                          ))
                        : null}

                      {/* links */}                     
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
