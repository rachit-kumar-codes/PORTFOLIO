import "../portfolio.css";
import profilePic from "../assets/rachit-profile.png";
import Arrow from "../assets/arrow.png";
import pdf from "../assets/resume.png";
import github from "../assets/github.png";
import lin from "../assets/linkedin.png";
import dot from "../assets/dot.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

function Hero() {
  return (
    <>
      <div id="hero" className="HeroBody">
        <main className="container HeroMain">
          <div className="hero container">
            <section className="profile-sec flex">
              <h1 className="heading">{`< WELCOME TO RK'S SPACE ! />`}</h1>
              <div className="profile-picture">
                <article className="profile-pic-sec">
                  <img src={profilePic} alt="profile-pic" className="picture" />
                </article>
                <div className="work-mode">
                  <img className="dot-image" src={dot} alt="green-dot" />
                  <div className="work">open to work</div>
                </div>
              </div>

              <h2 className="titlename">Rachit Kumar</h2>
            </section>

            <div id="about" className="about-sec flex">
              <div className="bio-data">
                <div>
                  <FaBriefcase />
                  <span>Software Engineer</span>
                </div>
                <div>
                  <FaLocationDot />
                  <span>Gwalior, Madhya Pradesh</span>
                </div>
                <div>
                  <HiMail />
                  <span>callmerachit145@gmail.com</span>
                </div>
                <div>
                  <FaPhoneAlt />
                  <span>(+91)-9358974425</span>
                </div>
              </div>
              <article className="main-line flex">
                <h3>
                   Full-Stack Engineer |  AI-Integrated Systems |  Security &
                  Forensics Mindset
                </h3>
                <em>
                  &ldquo;Building intelligent, secure, and observable systems
                  powered by modern web and AI technologies.&rdquo;
                </em>
              </article>
              <br />

              <article id="about" className="main-para flex">
                <p>
                  I&apos;m a{" "}
                  <strong className="str1">Full-stack Developer</strong>{" "}
                  building scalable, end-to-end web apps across the{" "}
                  <strong className="str3">MERN</strong> stack — from responsive
                  UIs to reliable backend architecture.
                  <br />
                  <br />
                  Lately I&apos;ve been expanding into{" "}
                  <strong className="str3">AI-integrated development</strong>,
                  working with LLMs, agent-based workflows, and tools like
                  LangChain and Ollama to ship intelligent, real-world tools.
                  <br />
                  <br />
                  My background in{" "}
                  <strong className="str3">Cyber Forensics</strong> and Security
                  shapes how I build — with a constant eye on data integrity,
                  observability, and resilience.
                </p>
              </article>
              <br />
              <div id="mainBtn">
                <article className="links">
                  <button className="btn">
                    <img src={github} alt="github.png" />
                    <a
                      href="https://github.com/rachit-kumar-codes"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </button>
                  <button className="btn">
                    <img src={lin} alt="linkedin.png" />
                    <a
                      href="https://www.linkedin.com/in/rachit-rk/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      LinkedIn
                    </a>
                  </button>
                </article>
                <button className="resume-btn">
                  <a href="/Resume.pdf" download target="_blank">
                    Download Resume
                  </a>
                  <img src={pdf} alt="resume.png" className="res-img" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
export default Hero;
