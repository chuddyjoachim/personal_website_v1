import React from 'react'
import projectdata from '../../constant/projectdata'
import ProjectCard from '../projectcard'

const Allwork = () => {
  return (
    <div>
      <div className="space-y-3">
        {projectdata.map((data) => (
          <ProjectCard
            key={data.id}
            type={data.type}
            title={data.title}
            description={data.description}
            imgUrl={data.imgUrl}
            links={data.links}
          />
        ))}
      </div>
    </div>
  )
}

export default Allwork
