import Project from "./Project"

import projects from "../utils/projects"

const bodyStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    color: "Green",
}

function Body() {
    return(
        <div style={bodyStyle} >
            {projects.map(({title, img, gitLink, deployedLink, description}) => {
          return (
            <Project 
              title={title} 
              description={description}
              img={img}
              gitLink={gitLink}
              deployedLink={deployedLink}
            />
          )
        })}
        </div>
    )
}

export default Body;