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

function Contact() {
    return(
        <div style={style.container} >
            <h2>Contact</h2>
            <form action="#">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/><br /><br />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/><br /><br />
                <textarea style={{resize:"none"}} required></textarea><br /><br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    )
}

export default Contact;