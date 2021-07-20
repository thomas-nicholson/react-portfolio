import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faFilePdf, } from '@fortawesome/free-solid-svg-icons'
import { faGitAlt, faReact, faNodeJs, faHtml5, faCss3, faJs} from '@fortawesome/free-brands-svg-icons'

const style = {
    container: {
        textAlign: "center",
        width: "80%",
    },
    list: {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        fontSize: "30px"
    },
    item: {
        display: "inline",
        padding: 10,
        color: "black"
    }
}

function Resume() {
    return(
        <div style={style.container} >
            <h1><a href="./assets/CV_of_Thomas_Nicholson.pdf" style={{color: "black", fontWeight: "normal"}} target="_blank">Resume: <FontAwesomeIcon icon={faFilePdf} /></a></h1>
            <h2>Skills:</h2>
            <ul style={style.list}>
                <li style={style.item}><FontAwesomeIcon icon={faHtml5} />HTML</li>
                <li style={style.item}><FontAwesomeIcon icon={faCss3} />CSS</li>
                <li style={style.item}><FontAwesomeIcon icon={faJs} />Javascript</li>
                <li style={style.item}><FontAwesomeIcon icon={faNodeJs} />Node.JS</li>
                <li style={style.item}><FontAwesomeIcon icon={faGitAlt} />Git</li>
                <li style={style.item}><FontAwesomeIcon icon={faReact} />React</li>
            </ul>
        </div>
    )
}

export default Resume;