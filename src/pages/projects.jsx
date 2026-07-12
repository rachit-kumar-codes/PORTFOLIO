import { data } from "../data/Data";
import "../portfolio.css";
import github from "../assets/github.png";
import live from "../assets/flash.png";
function Project() {
  return (
    <div id="projects" className="ProjectPage">
      <div className="projectSec container flex">
        <h1>{`< Top Projects /> `}</h1>
        <div className="projects">
          {data &&
            data.map((item, id) => (
              <article className="project" key={id}>
                <h2>{item.title}</h2>
                <div className="poster">
                  <img
                    className="poster-img"
                    src={item.Image}
                    alt={item.title}
                  />
                </div>
                <h3>Description</h3>
                <p>{item.brief}</p>
                <h3>Tech Skills</h3>
                <div className="tech-badges">
                  {item.Tech_stack.split(",").map((skill) => (
                    <span className="tech-badge" key={skill}>
                      {skill.trim()}
                    </span>
                  ))}
                </div>
                <h3>Explore More</h3>
                <section className="demo-btn-sec">
                  <div className="demo-btn">
                    <a
                      href={item.Explore_More.Github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github{" "}
                    </a>
                    <img src={github} alt="github.png" />
                  </div>
                  <div className="demo-btn">
                    <a
                      href={item.Explore_More.Live_Demo || null}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    <img src={live} alt="live.png" />
                  </div>
                </section>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Project;
