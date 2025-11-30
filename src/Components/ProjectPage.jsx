 
import { projects } from "../data/proyects"
import { useParams } from "react-router-dom"

export const ProjectPage = () => {
    const id  = useParams().id
    const project = projects.filter(e => e.id == id)
  return (
    <div>ProjectPage
        <div>
            <div>
                <img 
                    src={project.img} alt="" 
                    height={600}
                    width={800}
                />
            </div>
        </div>
    </div>
  )
}
