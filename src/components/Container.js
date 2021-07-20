import Header from './Header';
import Footer from './Footer';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';

import { useState } from 'react';

const style = {
  height: "100%",
  display: "flex",
  flexFlow: "column",
  justifyContent: "space-between"
}

function Container() {

    const [currentPage, setCurrentPage] = useState('AboutMe');

    const choosePage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
          }
          if (currentPage === 'Portfolio') {
            return <Portfolio />;
          }
          return <Contact />;
    }

    const onPageChange = (page) => setCurrentPage(page);

    return(
        <div style={style}>
            <Header currentPage={currentPage} onPageChange={onPageChange}  />
                {choosePage()}
            <Footer />
        </div>
    )
}

export default Container;
