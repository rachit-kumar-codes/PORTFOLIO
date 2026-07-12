import lang from "../assets/lang.svg";
import cloud from "../assets/cloud.svg";
export const SkillNames = {
  C: "c",
  CPP: "cpp",
  PYTHON: "python",
  JS: "js",
  TS: "ts",
  HTML: "html",
  CSS: "css",
  REACT: "react",
  TAILWIND: "tailwind",
  REDUX: "redux",
  NODEJS: "nodejs",
  EXPRESS: "express",
  FASTAPI: "fastapi",
  JWT: "jwt",
  CLOUDINARY: "cloudinary",
  MONGODB: "mongodb",
  MYSQL: "mysql",
  APPWRITE: "appwrite",
  GIT: "git",
  GITHUB: "github",
  DOCKER: "docker",
  LINUX: "linux",
  JEST: "jest",
  VERCEL: "vercel",
  POSTMAN: "postman",
  LANGCHAIN:"langchain",
};
export const SKILLS = {
  [SkillNames.C]: {
    id: 1,
    name: "c",
    label: "C",
    shortDescription:
      "Where pointers keep you humble and memory leaks keep you honest.",
    color: "#a8b9cc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  [SkillNames.CPP]: {
    id: 2,
    name: "cpp",
    label: "C++",
    shortDescription:
      "DSA's home turf — templates, STL, and the occasional segfault at 2am.",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 3,
    name: "python",
    label: "Python",
    shortDescription:
      "My go-to for AI/ML experiments, quick scripts, and forensics tooling.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.JS]: {
    id: 4,
    name: "js",
    label: "JavaScript",
    shortDescription:
      "The glue that holds the MERN stack — and half the internet — together.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 5,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Catches my mistakes before the browser has to.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 6,
    name: "html",
    label: "HTML5",
    shortDescription: "Every project starts here, whether we admit it or not.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 7,
    name: "css",
    label: "CSS3",
    shortDescription: "Flexbox by day, fighting z-index bugs by night.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 8,
    name: "react",
    label: "React.js",
    shortDescription:
      "Hooks, Context, React Query — my default toolkit for responsive UI.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 9,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription:
      "Utility classes so I stop naming things 'wrapper2-final'.",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  [SkillNames.REDUX]: {
    id: 10,
    name: "redux",
    label: "Redux Toolkit",
    shortDescription:
      "For when component state gets too big to keep to itself.",
    color: "#764abc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 11,
    name: "nodejs",
    label: "Node.js",
    shortDescription:
      "JavaScript on the backend, powering every API I've shipped.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 12,
    name: "express",
    label: "Express.js",
    shortDescription:
      "Minimal routing, maximum control — my REST API workhorse.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.FASTAPI]: {
    id: 13,
    name: "fastapi",
    label: "FastAPI",
    shortDescription:
      "For when the heavy AI/ML lifting needs a Python backend that keeps up.",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.JWT]: {
    id: 14,
    name: "jwt",
    label: "JWT Auth",
    shortDescription:
      "Stateless auth tokens that keep sessions secure and servers scalable.",
    color: "#d63aff",
    icon: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/jsonwebtokens.svg",
  },
  
  [SkillNames.MONGODB]: {
    id: 15,
    name: "mongodb",
    label: "MongoDB",
    shortDescription:
      "Schemas that bend instead of break when the requirements change.",
    color: "#47a248",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 16,
    name: "mysql",
    label: "MySQL",
    shortDescription:
      "Reliable, relational, and always there when I need real structure.",
    color: "#4479a1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.APPWRITE]: {
    id: 17,
    name: "appwrite",
    label: "Appwrite",
    shortDescription:
      "A quick backend-as-a-service for auth, storage, and DB when speed matters.",
    color: "#fd366e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/appwrite/appwrite-original.svg",
  },
  [SkillNames.GIT]: {
    id: 18,
    name: "git",
    label: "Git",
    shortDescription:
      "Commit early, commit often, and never force-push to main.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 19,
    name: "github",
    label: "GitHub",
    shortDescription:
      "Where every one of my projects lives, from prototypes to shipped tools.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "It works on my machine, and now yours too.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 21,
    name: "linux",
    label: "Linux",
    shortDescription:
      "Home base for every security tool, terminal habit, and CI/CD script I run.",
    color: "#fcc624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.JEST]: {
    id: 22,
    name: "jest",
    label: "Jest",
    shortDescription: "Because 'it works on my machine' isn't a test suite.",
    color: "#c21325",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  [SkillNames.VERCEL]: {
    id: 23,
    name: "vercel",
    label: "Vercel / Render",
    shortDescription:
      "Push to main, watch it deploy — my go-to for shipping fast.",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },

  [SkillNames.POSTMAN]: {
    id: 24,
    name: "postman",
    label: "Postman",
    shortDescription:
      "Tested and documented REST APIs with collections, environments, and automated requests.",
    color: "#FF6C37",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  [SkillNames.LANGCHAIN]: {
    id: 25,
    name: "langchain",
    label: "LangChain",
    shortDescription:
      "Built LLM-powered applications using chains, agents, prompts, tools, and RAG workflows.",
    color: "#245858",
    icon: lang,
  },
  [SkillNames.CLOUDINARY]: {
  id: 26,
  name: "cloudinary",
  label: "Cloudinary",
  shortDescription:
    "Managed image uploads, optimization, transformations, and cloud media delivery.",
  color: "#3448C5",
  icon: cloud,
},
};
