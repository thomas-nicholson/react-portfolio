import Project from "./Project"

import projects from "../utils/projects"

const portfolioStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    color: "Green",
}

function Portfolio() {
    return(
        <div style={portfolioStyle} >
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

export default Portfolio;