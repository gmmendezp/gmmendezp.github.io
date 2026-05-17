import { lazy, Suspense } from "react";
import About from "../components/main/About";
import Footer from "../components/main/Footer";
import Menu from "../components/main/Menu";
import Profile from "../components/main/Profile";
import { useDataStore } from "../stores/data";

const loadExperience = () => import("../components/main/Experience");
const loadProjects = () => import("../components/main/Projects");
const loadEducation = () => import("../components/main/Education");

const LazyExperience = lazy(loadExperience);
const LazyProjects = lazy(loadProjects);
const LazyEducation = lazy(loadEducation);

const SectionFallback = ({ minHeight }: { minHeight: number }) => (
  <div
    className="w-full animate-pulse rounded bg-secondary/10"
    style={{ minHeight }}
    aria-hidden="true"
  />
);

const Home = () => {
  const { about, education, experience, info, projects, social, footer } =
    useDataStore();

  return (
    <div className="relative mx-auto max-w-7xl">
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
      <Suspense fallback={<SectionFallback minHeight={360} />}>
        <LazyExperience experience={experience} />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight={420} />}>
        <LazyProjects projects={projects} />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight={300} />}>
        <LazyEducation education={education} />
      </Suspense>
      <Footer text={footer} />
    </div>
  );
};

export default Home;
