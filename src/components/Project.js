import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const style = {
    divStyle: {
        borderStyle: "solid",
        borderRadius: "15px",
        margin: "10px",
        padding: "20px"

    },
    linkStyles: {
        display: "flex", 
        marginTop: "20px",
        justifyContent: "space-around",
        fontSize: "20px"
    },
    imgStyle: {
        width: "300px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    }
}


function Project({title, description, img, deployedLink, gitLink}) {
    return(
        <div style={style.divStyle} >
            <h1>{title}</h1>
            <img style={style.imgStyle} src={img} alt="" />
            <span style={style.linkStyles} >
                <a target="_blank" className="link" rel="noreferrer" href={`${deployedLink}`}><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                <a target="_blank" className="link" rel="noreferrer" href={`${gitLink}`}><FontAwesomeIcon icon={faGithub} /></a>
            </span>
            
        </div>
    );
}

export default Project;