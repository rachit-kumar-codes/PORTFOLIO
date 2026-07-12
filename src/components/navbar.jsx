import "../portfolio.css"
import icon from "../assets/icon.png"
function Navbar() {
  return (
    <div>
      <div id="Header" className="fixed flex">
        <div className="flex head">
          <span className="LogoName">
            <a href="#hero" className="Tname">
              Rachit . /dev
            </a>
          </span>
          <section className="NavSec flex">
            <a className="btn" href="#about">
              About me
            </a>
            <a className="btn" href="#skills">
              Skills
            </a>
            <a className="btn" href="#projects">
              Projects
            </a>
          </section>
        </div>
        <div className="icon">
          <img src={icon} alt="Active-icon" />
        </div>
      </div>
    </div>
  )
}
export default Navbar
