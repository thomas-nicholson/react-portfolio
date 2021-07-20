import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const style = {
    container: {
        textAlign: "center",
        width: "100%"
    },
    list: {
        listStyleType: "none",
        margin: 0,
        padding: "5px",
        fontSize: "20px"
    },
    item: {
        display: "inline",
        padding: 10,
        color: "black"
    }
}
function Footer() {
    return(
        <div style={style.container} >
            <hr />
            <ul style={style.list}>
                <li style={style.item}><a href="#" className="link"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li style={style.item}><a href="#" className="link"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li style={style.item}><a href="#" className="link"><FontAwesomeIcon icon={faTwitter} /></a></li>
            </ul>
        </div>
    );
}

export default Footer;