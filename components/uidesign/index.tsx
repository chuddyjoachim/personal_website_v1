import projectdata from '../../constant/projectdata'
import ProjectCard from '../projectcard'

const uiData =  projectdata.filter(alldata=>{
  return alldata.type == 'design'? alldata : null
})


const UiDesign = () => {
  return (
    <div className="space-y-3">
      {uiData.map((data) => (
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
  )
}

export default UiDesign
