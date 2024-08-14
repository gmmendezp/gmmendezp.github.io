import About from "../components/main/About";
import Education from "../components/main/Education";
import Experience from "../components/main/Experience";
import Footer from "../components/main/Footer";
import Menu from "../components/main/Menu";
import Profile from "../components/main/Profile";
import Projects from "../components/main/Projects";
import { useDataStore } from "../stores/data";

const Home = () => {
  const { about, education, experience, info, projects, social, footer } =
    useDataStore();
  return (
    <div className="max-w-7xl mx-auto xy-0 relative">
      <Menu
        sections={[
          { name: "About", href: "#about" },
          { name: "Portfolio", href: "#portfolio" },
          { name: "Experience", href: "#experience" },
          { name: "Education", href: "#education" },
        ]}
      />
      <Profile social={social} info={info} />
      <About data={about} />
      <Experience experience={experience} />
      <Projects projects={projects} />
      <Education education={education} />
      <Footer text={footer} />
    </div>
  );
};

export default Home;
