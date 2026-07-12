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
      "A full-stack deepfake detection system that combines deep learning with signal-analysis heuristics to flag manipulated images and video, hitting ~90% / ~87% accuracy respectively.",
    Tech_stack:
      "Reactjs, Nodejs, Expressjs, Hugging Face Transformers, MTCNN, RetinaFace, Python, TensorFlow, Flask",
    Explore_More: {
      Github:
        "https://github.com/rachit-kumar-codes/DeepGuard-Deep-Fake-Detection-System",
      Live_Demo: "https://deep-fake-detection-system.vercel.app/",
    },
  },
  {
    id: 2,
    title: "BLACKHOLE Search Engine: Custom search engine",
    Image: blackhole,
    ss: "bh",
    brief:
      "A MERN-based custom search engine prototype that crawls the web with a BFS algorithm and indexes structured data in MongoDB for fast retrieval.",
    Tech_stack:
      "Reactjs, Nodejs, Expressjs, Web Crawling, Cheerio, Search Indexing",
    Explore_More: {
      Github: "https://github.com/rachit-kumar-codes/BLACKHOLE-search-engine",
      Live_Demo: "https://blackhole-search-engine.vercel.app/",
    },
  },
  {
    id: 3,
    title: "MiniLinked-In : simplified linkedin clone",
    Image: minilinkedin,
    brief:
      "A full-stack MERN social platform with JWT authentication, real-time post creation with media support, and interactive commenting on a global feed.",
    Tech_stack: "MongoDB atlas, Expressjs, Reactjs, Node.js, JWT Auth",
    Explore_More: {
      Github: "https://github.com/rachit-kumar-codes/LinkedIn-Lite",
      Live_Demo: "https://linkedin-lite-virid.vercel.app/",
    },
  },

  {
    id: 4,
    title: "D-LoGGer Malware Detection System",
    Image: dlogger,
    brief:
      "A behavior-based malware detection system that monitors processes and network activity to catch stealth keyloggers without relying on signatures.",
    Tech_stack:
      "Python, PySide6, Process Monitoring, Network Analysis, PyInstaller",
    Explore_More: {
      Github:
        "https://github.com/rachit-kumar-codes/D-loGGER-malware-detection-system",
    },
  },
  {
    id: 5,
    title: "LeakScan Data Breach Checker",
    Image: leakscan,
    brief:
      "A MERN breach-intelligence tool that checks emails or usernames against known data breaches and alerts users to exposure risk.",
    Tech_stack:
      "Reactjs, Nodejs, Expressjs, API Integration, Security Analysis",
    Explore_More: {
      Github:
        "https://github.com/rachit-kumar-codes/LeakScan-Data-Breach-Checker",
      Live_Demo: "https://leak-scan.netlify.app/",
    },
  },
  {
    id: 6,
    title: "Advanced Keylogger Simulation: Cyber Security Project",
    Image: keylogger,
    brief:
      "An educational offensive-security simulation of keystroke logging, clipboard capture, and encrypted data exfiltration, built for defensive research.",
    Tech_stack: "Python, Encryption, System Hooks, Security Research",
    Explore_More: {
      Github: "https://github.com/rachit-kumar-codes/Advanced_KeyLogger",
    },
  },
];
