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
                <li style={style.item}><a href="#aboutme" className={currentPage === 'AboutMe' ? 'active' : 'link'} onClick={() => onPageChange('AboutMe')}>About Me</a></li>
                <li style={style.item}><a href="#portfolio" className={currentPage === 'Portfolio' ? 'active' : 'link'} onClick={() => onPageChange('Portfolio')}>Portfolio</a></li>
                <li style={style.item}><a href="#contact" className={currentPage === 'Contact' ? 'active' : 'link'} onClick={() => onPageChange('Contact')}>Contact</a></li>
                <li style={style.item}><a href="#resume" className={currentPage === 'Resume' ? 'active' : 'link'} onClick={() => onPageChange('Resume')}>Resume</a></li>
            </ul>
            <hr />
        </div>
    );
}

export default Navigation;