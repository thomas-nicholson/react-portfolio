const style = {
    textAlign: "justify",
    textJustify: "inter-word",
    width: "80%",
    flexGrow: 4
}

function AboutMe() {
    return(
        <div style={style} >
            <h1>About Me</h1>
            <p>Welcome to my portfolio page, my name is Thomas Nicholson.</p>
            <p>I'm a 25 year old web developer. My interests include health, nutrition, education, business and politics.</p>
            <p>Check out my portfolio or contact me with the links at the bottom if you'd like.</p>
        </div>
    )
}

export default AboutMe;