import "../portfolio.css";
import imgone from "../assets/github copy.png";
import imgtwo from "../assets/linkedin copy.png";
import imgthree from "../assets/google.png";

function Footer() {
  return (
    <div id="Footermain">
      <div id="footer">
        <section className="foot">
          <article className="a1">
            <h3>
              <span className="prompt">RK@portfolio:~$</span>{" "}
              <span className="cmd">whoami</span>
            </h3>
            <ul className="list-foot">
              <li>Rachit Kumar</li>
              <li>
                Full-Stack Engineer | AI-Integrated Systems | Security &
                Forensics Mindset
              </li>
              <li>Security-aware Engineer</li>
            </ul>
          </article>
          <article className="a1">
            <h3>
              <span className="prompt">RK@portfolio:~$</span>{" "}
              <span className="cmd">projects</span>
            </h3>
            <div className="f-skills">
              <h4>→ DeepGuard</h4>
              <h4>→ Blackhole</h4>
              <h4>→ MiniLinkedIn</h4>
              <h4>→ D-Logger</h4>
              <h4>→ Leakscan</h4>
              <h4>→ Keylogger</h4>
            </div>

            <br />
            <h3>
              <span className="prompt">RK@portfolio:~$</span>{" "}
              <span className="linux-name">_</span>
            </h3>
          </article>
        </section>
        <section className="foot2">
          <article className="article2">
            <div className="social-icon">
              <a
                href="https://github.com/rachit-kumar-codes"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <img src={imgone} alt="Github" />
              </a>
            </div>
            <div className="social-icon">
              <a href="mailto:callmerachit145@gmail.com" aria-label="Email">
                <img src={imgthree} alt="Email" />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/rachit-rk/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <img src={imgtwo} alt="LinkedIn" />
              </a>
            </div>
          </article>
          <article className="article3">
            <button className="res-btn">
              <a
                href="/Resume.pdf"
                download
                className="res-btn2"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </button>
          </article>
        </section>
      </div>
    </div>
  );
}
export default Footer;
