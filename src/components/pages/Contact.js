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
                <li style={style.item}><a href="#">Phone</a></li>
                <li style={style.item}><a href="#">Email</a></li>
                <li style={style.item}><a href="#">Resume</a></li>
                <li style={style.item}><a href="#">LinkedIn</a></li>
                <li style={style.item}><a href="#">Github</a></li>
                <li style={style.item}><a href="#">Twitter</a></li>
            </ul>
        </div>
    )
}

export default Contact;