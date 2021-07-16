import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

import projects from './utils/projects';

function App() {

  

  return (
    <div>
      <Header />
      {projects.map(({title, img, gitLink, deployedLink, description}) => {
        return (
          <Project 
            title={title} 
            description={description}
            img={img}
            gitLink={gitLink}
            deployedLink={deployedLink}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
