import Header from './Header';
import Footer from './Footer';
import Portfolio from './pages/Portfolio';

function Container() {
    return(
        <div>
            <Header />
                <Portfolio />
            <Footer />
        </div>
    )
}

export default Container;
