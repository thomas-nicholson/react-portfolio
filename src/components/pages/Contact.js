const style = {
    container: {
        alignItems: "center",
        width: "80%",
        fontSize: "20px"
    },
    input: {
        borderRadius: "50px",
        borderStyle: "solid"
    },
    submit: {
        backgroundColor: "black",
        color: "white",
        border: "none",
        padding: "10px",
        borderRadius: "5px"
    }
    
}

function Contact() {
    return(
        <div style={style.container} >
            <h2>Contact</h2>
            <form action="#">
                <label for="name">Name:</label><br />
                <input style={style.input} type="text" id="name" name="name" required/><br /><br />
                <label for="email">Email:</label><br />
                <input style={style.input} type="email" id="email" name="email" required/><br /><br />
                <label for="message">Message for Thomas:</label> <br />
                <textarea style={style.input} rows="10" cols="50" style={{resize:"none"}} id="message" name="message" required></textarea><br /><br />
                <input style={style.submit} type="submit" value="Submit" />
            </form>
            
        </div>
    )
}

export default Contact;