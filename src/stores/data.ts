import { create } from "zustand";

export const useDataStore = create(() => ({
  about: [
    "Strong Web Developer with extensive experience in front-end and full-stack development. Proficient in a wide range of web technologies and frameworks, including React, Next.js, Typescript, Redux, and more. With proven ability to develop and maintain web applications with a focus on performance and user experience. Adept at problem-solving and continuously learning new technologies to stay ahead in the field.",
  ],
  education: [
    {
      institution: "Universidad Nacional de Costa Rica",
      area: "Computer Science",
      studyType: "Bachelors",
      startDate: "2007-02-15",
      endDate: "2012-05-04",
    },
    {
      institution: "Udacity",
      area: "Machine Learning",
      studyType: "Online Nanodegree",
      startDate: "2016",
      endDate: "Current",
    },
    {
      institution: "Udacity",
      area: "Front End Web Development",
      studyType: "Online Nanodegree",
      startDate: "2016",
      endDate: "2016",
    },
    {
      institution: "Coursera",
      area: "Data Structures and Algorithms",
      studyType: "Online Specialization",
      startDate: "2016",
      endDate: "2016",
    },
    {
      institution: "SCRUMStudy",
      area: "Scrum Fundamentals Certified (SFC)",
      studyType: "Online Acreditation",
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
        "Development of asset localization app with indoor maps using Mapbox and React. Front End development of developer portal for payments API using Next.js, React Typescript, Styled Components, Jest, enzyme, AWS Lambdas, DynamoDB, Cognito, etc. Site features development for a company in the food industry using React, Redux, Sass Jest, React Testing Library, optimizely, ruby & rails. Front end development for a refinancing company to digitize the workflow using React, Redux, Typescript, Jest, Material UI, styled components, formik, yup and others.",
    },
    {
      position: "Software Engineer",
      company: "Style Arcade",
      startDate: "2018-08-20",
      endDate: "2019-10-20",
      summary:
        "Front end development and maintenance of React/Node fashion analytics project. Small Front-End project in VueJS.",
    },
    {
      position: "Web Developer",
      company: "Edify Software Consulting",
      startDate: "2015-11-23",
      endDate: "2018-08-10",
      summary:
        "Development of projects for education entities. Projects are developed using Javascript, Ember, Java, Spring, CakePHP, MySQL, PostgreSQL, MongoDB, jQuery, Sass, etc.",
    },
    {
      position: "Java Developer",
      company: "PrestoSports",
      startDate: "2013-08-19",
      endDate: "2015-11-1315",
      summary:
        "Continuous development of a CMS for college sports teams. Using Java, Spring, GWT, Javascript, jQuery, MySQL and others.",
    },
    {
      company: "Independent",
      position: "Software Engineer",
      startDate: "2013-05-06",
      endDate: "2014-02-04",
      summary:
        "Development of scripting projects using R and python. The projects involved parsing xml, performing data queries, creating plots and others.",
    },
    {
      position: "Software Engineer",
      company: "Avionyx S.A.",
      startDate: "2011-06-11",
      endDate: "2013-04-26",
      summary:
        "Requirements, tests and code development for avionics systems following the DO-178B standard and made in C, C++ and assembly.",
    },
  ],
  info: {
    firstName: "Martín",
    lastName: "Méndez",
    label: "Full stack developer",
    email: "gmmendezp@gmail.com",
    image: "profile.jpg",
  },
  projects: [
    {
      image: "portfolio-vite.png",
      title: "Resume/Portfolio",
      summary:
        "New version of the portfolio static website done using React, Vite, Zustand, Tailwind, etc.",
      demoURL: "https://gmmendezp.github.io/",
      codeURL: "https://github.com/gmmendezp/portfolio-vite",
    },
    {
      image: "portfolio.png",
      title: "Old Resume/Portfolio",
      summary:
        "Old codebase with improvements done to the portfolio and interactive resume projects for Udacity's Front End Nanodegree. This version was done using React, create-react-app, Webpack, Sass and Babel.",
      codeURL: "https://github.com/gmmendezp/portfolio",
    },
    {
      image: "neighborhood.png",
      title: "Neighborhood Map",
      summary:
        "A single-page web application, built using the Knockout framework, that displays a Google Map of an area and various points of interest. Users can search all included landmarks and, when selected, additional information about a landmark is presented from the FourSquare and Wikipedia APIs.",
      demoURL: "frontend-nanodegree-neighborhood-map/",
      codeURL:
        "https://github.com/gmmendezp/frontend-nanodegree-neighborhood-map",
    },
    {
      image: "nyssa.png",
      title: "Nyssa FE Project Generator",
      summary:
        "Yeoman generator to create Front End projects using React, Babel, Jest, ESLint and other technologies.",
      codeURL: "https://gitlab.com/gmmendezp/generator-nyssa-fe",
    },
    {
      image: "sentry.png",
      title: "Dota 2 Sentry Bot",
      summary:
        "Node library to gather Dota 2 player information as MMR, stats and lobby creation/management.",
      codeURL: "https://gitlab.com/DogShell_Development/sentry",
    },
    {
      image: "arcade.png",
      title: "Classic Arcade Game Clone",
      summary:
        "An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.",
      demoURL: "frontend-nanodegree-arcade-game/",
      codeURL: "https://github.com/gmmendezp/frontend-nanodegree-arcade-game",
    },
    {
      image: "feedreader.png",
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
      name: "Linkedin",
      url: "https://www.linkedin.com/in/martín-méndez-38aab22b",
    },
  ],
  footer: "© 2024 Martin Mendez. All rights reserved",
}));
