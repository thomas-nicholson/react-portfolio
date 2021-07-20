import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faFilePdf, faLinkedInIn } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const style = {
    container: {
        textAlign: "center",
    },
    list: {
        listStyleType: "none",
        margin: 0,
        padding: 0,
        width: "100%"
    },
    item: {
        display: "inline",
        padding: 10,
        color: "black"
    }
}

function Contact() {
    return(
        <div style={style.container} >
            <h2>Contact</h2>
            <ul style={style.list}>
                <li style={style.item}><a href="#"><FontAwesomeIcon icon={faPhone} />Phone</a></li>
                <li style={style.item}><a href="#"><FontAwesomeIcon icon={faEnvelope} />Email</a></li>
                <li style={style.item}><a href="#"><FontAwesomeIcon icon={faFilePdf} />Resume</a></li>
                <li style={style.item}><a href="#"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a></li>
                <li style={style.item}><a href="#"><FontAwesomeIcon icon={faGithub} />Github</a></li>
                <li style={style.item}><a href="#"><FontAwesomeIcon icon={faTwitter} />Twitter</a></li>
            </ul>
        </div>
    )
}

export default Contact;