import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html5,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  tesla,
  carrent,
  tripguide,
  internlab,
  ieee,
  hackthon,
  news,
  hotel,
  textutils,
  medical,
  corona,
  todolist,
  dance,
  bootstrap,
  c,
  opencv,
  linux,
  python,
  mysql,
  face,
  acm,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Graphics Designer",
    icon: creator,
  },
];



const technologies = [
  {
    name: "HTML 5",
    icon: html5,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C \ C++",
    icon: c,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "git",
    icon: git,
  },
  
];



const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Interns Lab",
    icon: internlab,
    iconBg: "#383E56",
    date: "November 2022 - May 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Content Writer",
    company_name: "ACM Student Chapter I2IT",
    icon: acm,
    iconBg: "#E6DEDD",
    date: "Sept. 2021 - Oct. 2021",
    points: [
      "Developing unique and engaging content requires a creative mindset. Thinking outside the box",
      "Being able to review and edit your own work for grammer,spelling and clarity is essential.Maintain a high level of Professionalis in Writing.",
      "Understanding the basics of search engine optimization (SEO) is essential.",
      "The abality to adapt your writing style and tone to diffrent target audience and platform is crucial.",
    ],
  },
  {
    title: "Graphics Designer",
    company_name: "IEEE PuneCon",
    icon: ieee,
    iconBg: "#383E56",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Creating a diffrent Posters and Designs for the Event .",
      "Design the posters of diffrent speakers and the Inauguration videos for the Event and create a presentation slides ",
      "Communicate with the technical team and do all the setup and collaborate with them.",
      "providing constructive feedback to other team members",
    ],
  },
  {
    title: "Graphics Designer",
    company_name: "Smart Pune Health Hackthon",
    icon: hackthon,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Creating a diffrent Posters and Designs for the Event .",
      "Design the posters of diffrent speakers and the Inauguration videos for the Event and create a presentation slides ",
      "Communicate with the technical team and do all the setup and collaborate with them.",
      "providing constructive feedback to other team members",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Corona Plot",
    description:
      "A web UI which show the no of patient present in the world according to that the color of pointer changes it's varies country to country",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML CSS",
        color: "pink-text-gradient",
      },
    ],
    image: corona,
    source_code_link: "https://github.com/Gsdhumal07/Corona_Plot.git",
  },
  {
    name: "Advance Face Detection",
    description:
      "A Platform where which mark the attendance by recognizing their face & store the data with that appropriate time and date and store it into the database",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
      {
        name: "Tkinter",
        color: "orange-text-gradient",
      },
    ],
    image: face,
    source_code_link: "https://github.com/Gsdhumal07/Face_Detection_System.git",
  },
  {
    name: "Hotel mang. System",
    description:
      "A web Platform where the hotem system can store the customers data and the booking facilities & the other facilities provided by hotelsand overall info of hotel ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/",
  },
  {
    name: "Live Update News",
    description:
      "Web application that enables users to search for live news, view the live news related to the difrrent sections, and also provide the details description about news .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NewsApi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "orange-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/Gsdhumal07/News_App_React.git",
  },

  {
    name: "Dance Website",
    description:
      "A web UI which is developed by the technologies NodeJs for practicing and earning purpose a simple website for the dance acadmy",
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML CSS",
        color: "pink-text-gradient",
      },
    ],
    image: dance,
    source_code_link: "https://github.com/Gsdhumal07/Dance_Website.git",
  },
  {
    name: "Trello",
    description:
      "tool that allows user to create,organize & manage tasks.It uses a system of boards, lists, & cards to organise information & provide visual representation of progress ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Gsdhumal07/AMO_Dials_trello.git",
  },

  {
    name: "Medical Chatbot System",
    description:
      "A patform where user provide the symptomes & on the basis of that data system will provide you recommendation on that disease also their is one GIS feature which help to find nearest medical store & hospital",
    tags: [
      {
        name: "Data Sci.",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: medical,
    source_code_link: "https://github.com/Gsdhumal07/ChatBot_GUI.git",
  },
  {
    name: "TextUtils",
    description:
      "A web platform where we can perform a diffrent operation on the text or the draft .we can refactor the draft which is helpful for writing blogs and formation the text paragraph and restructure it with the help of diffrent features",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML CSS",
        color: "pink-text-gradient",
      },
    ],
    image: textutils,
    source_code_link: "https://github.com/Gsdhumal07/text_utils_react.git",
  },
  {
    name: "LCD TODO List",
    description:
      "A web UI which simply keep the flow of task we have to do by sequence where we can add the task and according to the compliction we can delete used to keep the track of proccess and maintain sequence of process",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "HTML CSS",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/Gsdhumal07/LCD_TO_LIST.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
