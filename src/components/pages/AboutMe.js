const style = {
    container: {
        width: "80%",
        flexGrow: 4
    },
    img: {
        width: "200px",
        borderRadius: "15px"
    },
    text: {
        fontSize: "20px"
    }
    
}

function AboutMe() {
    return(
        <div style={style.container} >
            <img style={style.img} src="./assets/me.jpg" />
            <h1>About Me</h1>
            <p style={style.text}>Welcome to my portfolio page, my name is Thomas Nicholson.</p>
            <p style={style.text}>I'm a 25 year old web developer. My interests include health, nutrition, education, business and politics.</p>
            <p style={style.text}>Currently I'm finalising my web development course and working on two big exciting projects</p>
            <p style={style.text}>Check out my portfolio, contact me, or peruse the links at the bottom.</p>
        </div>
    )
}

export default AboutMe;