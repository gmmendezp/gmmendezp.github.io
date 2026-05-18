import { create } from "zustand";

export const useDataStore = create(() => ({
  about: [
    "Front-end focused web developer with strong React, Next.js, and TypeScript experience. I build production web applications, integrate APIs, write tests, and care about performance, accessibility, and code that is easy to maintain. I’m comfortable learning new domains and working closely with product and engineering teams.",
  ],
  education: [
    {
      institution: "Universidad Nacional de Costa Rica",
      area: "Computer Science",
      studyType: "Bachelor's",
      startDate: "2007-02-15",
      endDate: "2012-05-04",
    },
    {
      institution: "Udacity",
      area: "Front End Web Development",
      studyType: "Online Nanodegree",
      startDate: "2016",
      endDate: "2016",
    },
    {
      institution: "SCRUMStudy",
      area: "Scrum Fundamentals Certified (SFC)",
      studyType: "Online Accreditation",
      startDate: "2015",
      endDate: "2015",
    },
  ],
  experience: [
    {
      position: "Web Engineer",
      company: "Gorilla Logic",
      startDate: "2019-10-27",
      endDate: "2023-11-04",
      summary:
        "Built React tools for asset localization with indoor maps using Mapbox. Worked on a React/Next.js developer portal for payments APIs, including integrations with AWS Lambda, DynamoDB, and Cognito. Contributed to production React apps for food industry and refinancing workflows, using Redux, Sass, Styled Components, Jest, React Testing Library, Material UI, Formik, and Yup across different projects.",
    },
    {
      position: "Software Engineer",
      company: "Style Arcade",
      startDate: "2018-08-20",
      endDate: "2019-10-20",
      summary:
        "Built and maintained React and Node.js features for a fashion analytics platform, with additional work on a smaller Vue.js front-end project.",
    },
    {
      position: "Web Developer",
      company: "Edify Software Consulting",
      startDate: "2015-11-23",
      endDate: "2018-08-10",
      summary:
        "Built web applications for clients in the education industry using JavaScript, Ember, Java, Spring, CakePHP, MySQL, PostgreSQL, MongoDB, jQuery, and Sass.",
    },
    {
      position: "Java Developer",
      company: "PrestoSports",
      startDate: "2013-08-19",
      endDate: "2015-11-15",
      summary:
        "Maintained and extended a CMS for college sports teams using Java, Spring, GWT, JavaScript, jQuery, and MySQL.",
    },
    {
      company: "Independent",
      position: "Software Engineer",
      startDate: "2013-05-06",
      endDate: "2014-02-04",
      summary:
        "Built R and Python scripts for XML parsing, data queries, plotting, and automation tasks.",
    },
    {
      position: "Software Engineer",
      company: "Avionyx S.A.",
      startDate: "2011-06-11",
      endDate: "2013-04-26",
      summary:
        "Worked on requirements, tests, and code for avionics systems following the DO-178B standard using C, C++, and assembly.",
    },
  ],
  info: {
    firstName: "Martín",
    lastName: "Méndez",
    label: "Full stack developer",
    email: "gmmendezp@gmail.com",
    image: "profile.webp",
  },
  projects: [
    {
      image: "portfolio-vite.webp",
      title: "Resume/Portfolio",
      summary:
        "Portfolio and interactive resume rebuilt with React, Vite, TypeScript, Zustand, Tailwind, and automated tests.",
      demoURL: "https://gmmendezp.github.io/",
      codeURL: "https://github.com/gmmendezp/portfolio-vite",
    },
    {
      image: "portfolio.webp",
      title: "Old Resume/Portfolio",
      summary:
        "Earlier version of this portfolio, originally built for Udacity's Front-End Nanodegree with React, Create React App, Webpack, Sass, and Babel.",
      codeURL: "https://github.com/gmmendezp/portfolio",
    },
    {
      image: "neighborhood.webp",
      title: "Neighborhood Map",
      summary:
        "A Udacity project built with Knockout, featuring searchable map landmarks and data from Foursquare and Wikipedia.",
      demoURL: "frontend-nanodegree-neighborhood-map/",
      codeURL:
        "https://github.com/gmmendezp/frontend-nanodegree-neighborhood-map",
    },
    {
      image: "nyssa.webp",
      title: "Nyssa FE Project Generator",
      summary:
        "Yeoman generator for scaffolding React front-end projects with Babel, Jest, ESLint, and related tooling.",
      codeURL: "https://gitlab.com/gmmendezp/generator-nyssa-fe",
    },
    {
      image: "sentry.webp",
      title: "Dota 2 Sentry Bot",
      summary:
        "Node library to gather Dota 2 player information as MMR, stats and lobby creation/management.",
      codeURL: "https://gitlab.com/DogShell_Development/sentry",
    },
    {
      image: "arcade.webp",
      title: "Classic Arcade Game Clone",
      summary:
        "An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.",
      demoURL: "frontend-nanodegree-arcade-game/",
      codeURL: "https://github.com/gmmendezp/frontend-nanodegree-arcade-game",
    },
    {
      image: "feedreader.webp",
      title: "Feed Reader Testing",
      summary:
        "Wrote comprehensive unit tests, using the Jasmine testing framework, for an RSS Feed Reader application that uses Google's RSS API.",
      demoURL: "frontend-nanodegree-feedreader/",
      codeURL: "https://github.com/gmmendezp/frontend-nanodegree-feedreader",
    },
  ],
  social: [
    {
      name: "GitHub",
      url: "https://github.com/gmmendezp",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/martín-méndez-38aab22b",
    },
  ],
  footer: `© ${new Date().getFullYear()} Martín Méndez. All rights reserved`,
}));
