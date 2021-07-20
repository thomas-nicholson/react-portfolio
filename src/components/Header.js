import Navigation from './Navigation';

const style = {
  textAlign: "center",
  width:"100%"
}

function Header({ currentPage, onPageChange }) {
  return (
    <header style={style} >
      <h1>Thomas Nicholson</h1>
      <Navigation currentPage={currentPage} onPageChange={onPageChange} />
    </header>
  );
}

export default Header;