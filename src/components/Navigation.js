const style = {
    list: {
        listStyleType: "none",
        margin: 0,
        padding: 0,
    },
    item: {
        display: "inline",
        padding: 10,
    }
}

function Navigation() {
    return(
        <div>
            <h2>Navigation</h2>
            <ul style={style.list}>
                <li style={style.item}><a href="#home">Home</a></li>
                <li style={style.item}><a href="#aboutme">About Me</a></li>
                <li style={style.item}><a href="#portfolio">Portfolio</a></li>
                <li style={style.item}><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Navigation;