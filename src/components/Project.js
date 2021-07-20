const style = {
    divStyle: {
        borderStyle: "solid",
        borderRadius: "15px",
        margin: "10px",
        padding: "20px"

    },
    headerStyle: {

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
            <a target="_blank" rel="noreferrer" href={`${deployedLink}`}>Deployment</a>
            <a target="_blank" rel="noreferrer" href={`${gitLink}`}>GitHub</a>
        </div>
    );
}

export default Project;