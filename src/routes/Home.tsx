import { lazy, Suspense } from "react";
import About from "../components/main/About";
import Footer from "../components/main/Footer";
import Menu from "../components/main/Menu";
import Profile from "../components/main/Profile";
import BackToTop from "../components/misc/BackToTop";
import { sections } from "../data/navigation";
import { resumeData } from "../data/resume";
import { useActiveSectionOnScroll } from "../hooks/useActiveSectionOnScroll";

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
  useActiveSectionOnScroll();

  const { about, education, experience, info, projects, social, footer } =
    resumeData;

  return (
    <div id="top" className="relative mx-auto max-w-7xl">
      <Menu sections={sections} />
      <Profile social={social} info={info} />
      <About data={about} />
      <Suspense fallback={<SectionFallback minHeight={360} />}>
        <LazyExperience experience={experience} />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight={420} />}>
        <LazyProjects
          id="portfolio"
          title="Portfolio"
          projects={projects.new}
        />
        <LazyProjects
          id="old-projects"
          layout="compact"
          title="Old Projects"
          projects={projects.old}
        />
      </Suspense>
      <Suspense fallback={<SectionFallback minHeight={300} />}>
        <LazyEducation education={education} />
      </Suspense>
      <Footer text={footer} />
      <BackToTop />
    </div>
  );
};

export default Home;
