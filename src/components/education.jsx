import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa6";
import "../education.css";
import { info } from "../data/education";

function Education() {
  if (!info) return null;

  return (
    <>
      <h1 className="edu-title">{`< ${info[0].title} />`}</h1>
      <motion.article
        className="edu-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="edu-card-glow" aria-hidden="true" />
        <div className="edu-card-inner">
          <div className="edu-icon">
            <FaGraduationCap />
          </div>

          <p className="edu-college">{info[0].college}</p>
          <p className="edu-major">{info[0].major}</p>
          <p className="edu-special">{info[0].special}</p>

          <div className="edu-meta">
            <span className="edu-badge">Duration: {info[0].cdate}</span>
            <span className="edu-badge">CGPA: {info[0].cgpa}</span>
          </div>
        </div>
      </motion.article>
    </>
  );
}

export default Education;
