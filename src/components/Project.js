function Project({title, description, img}) {
    return(
        <div>
            <h1>{title}</h1>
            <img src={img} />
            <p>{description}</p>
        </div>
    );
}

export default Project;