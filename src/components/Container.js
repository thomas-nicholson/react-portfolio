import Header from './Header';
import Footer from './Footer';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Now from './pages/Now';
import Contact from './pages/Contact';

import { useState } from 'react';

function Container() {

    const [currentPage, setCurrentPage] = useState('AboutMe');

    const choosePage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
          }
          if (currentPage === 'Now') {
            return <Now />;
          }
          if (currentPage === 'Portfolio') {
            return <Portfolio />;
          }
          return <Contact />;
    }

    const onPageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Header currentPage={currentPage} onPageChange={onPageChange}  />
                {choosePage()}
            <Footer />
        </div>
    )
}

export default Container;
