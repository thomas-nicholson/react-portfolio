import Navigation from './Navigation';

function Header({ currentPage, onPageChange }) {
  return (
    <header>
      <h1>Header</h1>
      <Navigation currentPage={currentPage} onPageChange={onPageChange} />
    </header>
  );
}

export default Header;