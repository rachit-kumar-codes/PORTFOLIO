import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "../data/skillsData";
import "../skills.css";

const SKILL_LIST = Object.values(SKILLS);

function Skills() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // "press a key" easter egg - only listens while the section is in view.
  useEffect(() => {
    if (!inView) {
      setSelectedSkill(null);
      return;
    }
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      const match = SKILL_LIST.find((s) => s.name.toLowerCase().startsWith(key));
      if (match) setSelectedSkill(match);
    };
    const handleKeyUp = () => setSelectedSkill(null);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [inView]);

  return (
    <section id="skills" ref={sectionRef} className="skills-section">
      <h1 className="skills-heading">{`< TECHNICAL SKILLS />`}</h1>
      <p className="skills-hint">hover a skill, or press its matching key</p>

      <div className="skills-grid-wrap">
        <div className="skills-grid">
          {SKILL_LIST.map((skill) => {
            const isActive = selectedSkill?.name === skill.name;
            return (
              <motion.div
                key={skill.name}
                onMouseEnter={() => setSelectedSkill(skill)}
                onMouseLeave={() => setSelectedSkill(null)}
                animate={
                  inView
                    ? {
                        y: isActive ? -12 : 0,
                        rotateX: isActive ? -12 : 0,
                        opacity: 1,
                        boxShadow: isActive
                          ? `0 18px 30px -10px ${skill.color}88`
                          : "0 6px 14px -8px rgba(0,0,0,0.6)",
                      }
                    : { opacity: 0, y: 20 }
                }
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="skill-keycap"
                style={{ borderColor: isActive ? skill.color : undefined }}
              >
                <img
                  src={skill.icon}
                  alt={skill.label}
                  className="skill-icon"
                  draggable={false}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="skill-detail-wrap">
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="skill-detail"
            >
              <h3 style={{ color: selectedSkill.color }}>
                {selectedSkill.label}
              </h3>
              <p>{selectedSkill.shortDescription}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Skills;
