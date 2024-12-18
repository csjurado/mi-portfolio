import project1 from "../assets/projects/project-1.csjurado.jpg";
import project2 from "../assets/projects/project-2.csjurado.jpg";
import project3 from "../assets/projects/project-3.csjurado.jpg";
import project4 from "../assets/projects/project-4.csjurado.jpg";
import project5 from "../assets/projects/project-5.csjurado.png";
import project6 from "../assets/projects/project-6.csjurado.png";

export const HERO_CONTENT = `I am a passionate Full Stack Developer with hands-on experience in building web applications using tools like React, Laravel PHP, SQL databases, and Oracle Apex. My expertise spans front-end and back-end development, allowing me to create seamless and efficient solutions. A key highlight of my experience is developing the intranet module for Bustamante Fabara, a leading law firm, where I enhanced internal operations and streamlined communication processes. I am dedicated to delivering high-quality applications that meet user needs and drive organizational success.`;

export const ABOUT_TEXT = `I enjoy collaborating in team environments and value the opportunity to grow alongside others. My ability to adapt and learn has been instrumental in my professional development. One of my proudest achievements is my university capstone project—a platform for internships aimed at connecting students with valuable opportunities. I believe in combining technical skills with teamwork and innovation to create meaningful results. As a developer, I am driven by my curiosity and commitment to continuous learning, ensuring I stay at the forefront of technology trends.`;
export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Junior Developer",
    company: "Bustamante Fabara",
    description: `As a Junior Developer at Bustamante Fabara, I have had the opportunity to develop key applications for the company, including the intranet module, vacation management system, and attendance tracking system. I have also worked on integrating the Time Manager API, among other notable projects. These experiences have allowed me to contribute to improving internal processes and strengthen my development skills.`,
    technologies: ["React.js", "Oracle Apex", "Oracle Database"],
  },
  {
    year: "2023- 2023",
    role: "Frontend Developer",
    company: "Banco Codesarrollo ",
    description: `During my internship at Banco Codesarrollo, I collaborated in various technology areas, including development, working with tools like Angular and Laravel. This experience enhanced my technical skills and adaptability in team environments.`,
    technologies: ["HTML", "CSS", "Angular", "mySQL", "Laravel"],
  },
];

export const PROJECTS = [
  {
    title: "Bolsa de pasantias  ",
    image: project5,
    description:
      "This project, developed as a degree thesis using Laravel, is designed to facilitate internship opportunities. It includes features for sending emails and has been successfully deployed on Hostinger.",
    technologies: ["PHP", "Laravel", "Hostinger"],
    link: "https://www.youtube.com/watch?v=BIyWux8z4lg",
  },
  {
    title: "Control de Presupuesto",
    image: project3,
    description:
      "The project involved creating an application that calculates a user’s budget based on input values. Using React for the front-end and managing state for real-time calculations, the app allowed users to track expenses and adjust their budget efficiently. This project enhanced my skills in building interactive applications and handling user inputs.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link: "https://react-vite-control-gastos-csjurado.netlify.app/",
  },
  {
    title: "Busqueda de Giffs",
    image: project6,
    description:
      "This project focuses on consuming a GIF API, utilizing Local Storage to save search history. Built with Angular, it allows users to search for GIFs dynamically based on their queries.",
    technologies: ["Apex", "HTML", "CSS", "Oracle Database"],
    link: "https://apps.bustamantefabara.com/",
  },
  {
    title: "Intranet Bustamante Fabara ",
    image: project4,
    description:
      "The project involved developing modules for tracking attendance and vacation management for the company’s intranet. Using HTML, CSS, and primarily Oracle APEX, I implemented functionalities that allowed efficient tracking of employee attendance and vacation days. The project also utilized PL/SQL for backend logic, ensuring seamless integration with the database.",
    technologies: ["Apex", "HTML", "CSS", "Oracle Database"],
    link: "https://apps.bustamantefabara.com/",
  },
  {
    title: "Bebidas csjurado",
    image: project1,
    description:
      "The project involved using React to consume an alcohol beverage API, displaying real-time product data. Tailwind CSS was used for responsive styling, ensuring a clean and modern design. This project strengthened my skills in API integration and front-end development.",
    technologies: ["HTML", "CSS", "React"],
    link: "https://bebidas-csjurado.netlify.app/",
  },
  {
    title: "Clima App csjurado",
    image: project2,
    description:
      "The project involved using React to consume a weather API and display real-time weather data. Tailwind CSS was used to create a responsive and modern design, ensuring a user-friendly interface. This project helped me improve my skills in API integration and front-end development.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://clima-api-csjurado.netlify.app/",
  },
];

export const CONTACT = {
  address: "Armenia - Transversal 14, Quito - Ecuador , Valle de los Chillos ",
  phoneNo: "+593 998 399 0005 ",
  email: "carlos.santiago.jurado.bazan@gmail.com",
};
