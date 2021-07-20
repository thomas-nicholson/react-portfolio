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

function Navigation({ currentPage, onPageChange }) {
    return(
        <div>
            <ul style={style.list}>
                <li style={style.item}><a href="#aboutme" onClick={() => onPageChange('AboutMe')}>About Me</a></li>
                <li style={style.item}><a href="#portfolio" onClick={() => onPageChange('Portfolio')}>Portfolio</a></li>
                <li style={style.item}><a href="#contact" onClick={() => onPageChange('Contact')}>Contact</a></li>
            </ul>
            <hr />
        </div>
    );
}

export default Navigation;