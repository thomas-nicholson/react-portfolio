import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

const style = {
  textAlign: "center"
}

function App() {
  return (
    <div style={style}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
