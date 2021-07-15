import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';



function App() {

  const projects = [
    {
      title:"Gym Club",
      img: "",
      gitLink: "",
      deployedLink: "",
      description: ""
    },
    {
      title: "Reacharity",
      img: "./assets/reacharity-screenshot.png",
      gitLink: "",
      deployedLink: "",
      description: ""
    },
    {
      title:"Weather Dashboard",
      img: "./assets/weather-dashboard-screenshot.png",
      gitLink: "",
      deployedLink: "",
      description: ""
    },
    {
      title:"Code Quiz",
      img: "./assets/code-quiz-screenshot.png",
      gitLink: "",
      deployedLink: "",
      description: ""
    },
    {
      title:"Gym Club",
      img: "./assets/gym-club-screenshot.png",
      gitLink: "",
      deployedLink: "",
      description: ""
    },
  ];

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
