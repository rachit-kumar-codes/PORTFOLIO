import deepguard from "../assets/deepguard.png";
import blackhole from "../assets/blackholee.png";
import dlogger from "../assets/dlogger.png";
import minilinkedin from "../assets/minilinkedin.png";
import keylogger from "../assets/keylogger.png";
import leakscan from "../assets/leakscan.png";

export const data = [
  {
    id: 1,
    title: "DeepGuard: Deepfake detection system",
    Image: deepguard,
    brief:
      "A Full-stack Deepfake AI media detection system that combines Deep Learning with signal-analysis Heuristics to flag manipulated images with Temporal Inconsistency analysis for video, hitting approx ~90% accuracy respectively.",
    Tech_stack:
      "Reactjs, Nodejs, Expressjs, Hugging Face Transformers, MTCNN, RetinaFace, Python, TensorFlow, Flask",
    Explore_More: {
      Github:
        "https://github.com/rachit-kumar-codes/DeepGuard-Deep-Fake-Detection-System",
      Live_Demo: "https://deep-fake-detection-system.vercel.app/",
    },
    Category: "MERN+Python",
  },
  {
    id: 2,
    title: "BLACKHOLE: Custom Search Engine",
    Image: blackhole,
    ss: "bh",
    brief:
      "A Full-stack MERN based Search Engine mimics the under hood working of Real SE like Google etc with workings like crawls the web with a BFS algorithm and indexes structured data in MongoDB for fast retrieval.",
    Tech_stack:
      "Reactjs, Nodejs, Expressjs, Crawling, Cheerio, Framer Motion, Search Indexing, Pagination, Frotnend Optimizations",
    Explore_More: {
      Github: "https://github.com/rachit-kumar-codes/BLACKHOLE-search-engine",
      Live_Demo: "https://blackhole-search-engine.vercel.app/",
    },
    Category: "MERN stack",
  },
  {
    id: 3,
    title: "MiniLinked-In : Social Media Clone",
    Image: minilinkedin,
    brief:
      "A Full-stack MERN social platform with Register/Login forms, JWT authentication, real-time post creation with media support, and interactive commenting on a global feed and many more features.",
    Tech_stack:
      "MongoDB atlas, Expressjs, Reactjs, Node.js, JWT Auth, Cloudinary, Multer, Frontend Optimizations",
    Explore_More: {
      Github: "https://github.com/rachit-kumar-codes/LinkedIn-Lite",
      Live_Demo: "https://linkedin-lite-virid.vercel.app/",
    },
    Category: "MERN stack",
  },

  {
    id: 4,
    title: "D-LoGGer: Malware Detection System",
    Image: dlogger,
    brief: `A behavior-based Malware Detection system that monitors processes and network activity to catch stealth keyloggers without relying on "Signatures".`,
    Tech_stack:
      "Python, PySide6, Process Monitoring, Network Analysis, PyInstaller",
    Explore_More: {
      Github:
        "https://github.com/rachit-kumar-codes/D-loGGER-malware-detection-system",
    },
    Category: "Cyber Security (python)",
  },
  {
    id: 5,
    title: "LeakScan: Data Breach Checker",
    Image: leakscan,
    brief:
      "A Breach-intelligence tool that checks Emails and Usernames against known data breaches and alerts users to exposure risk using well known Third-party API.",
    Tech_stack:
      "Reactjs, Nodejs, Expressjs, API Integration, Security Analysis, OAuth",
    Explore_More: {
      Github:
        "https://github.com/rachit-kumar-codes/LeakScan-Data-Breach-Checker",
      Live_Demo: "https://leak-scan.netlify.app/",
    },
    Category: "MERN stack",
  },
  {
    id: 6,
    title: "Keylogger Simulation: Cyber Security Project",
    Image: keylogger,
    brief: `An Educational Offensive-security simulation of keystroke logging, clipboard capture, and encrypted data exfiltration, built for defensive research and learning about working behind a "Kelogger".`,
    Tech_stack: "Python, Encryption, System Hooks, Security Research",
    Explore_More: {
      Github: "https://github.com/rachit-kumar-codes/Advanced_KeyLogger",
    },
    Category: "Cyber Security (python)",
  },
];
