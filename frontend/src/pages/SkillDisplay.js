import React from "react";
import { Link } from "react-router-dom";
import HTMLImage from "../images/html.png";
import CSSImage from "../images/css.png";
import JavaScriptImage from "../images/javascript.jpg";
import ReactImage from "../images/react.jpg";
import NodeJSImage from "../images/nodejs.png";
import PythonImage from "../images/python.png";


const SkillDisplay = () => {

  const skills = [
    { name: "html", image: HTMLImage },
    { name: "css", image: CSSImage },
    { name: "javascript", image: JavaScriptImage },
    { name: "react", image: ReactImage },
    { name: "nodejs", image: NodeJSImage },
    { name: "python", image: PythonImage },
  ];

  const displaySkills = skills.slice(0, 6);

  return (
    <div className="skill-display">
      <h2>Skill Display</h2>
      <div className="skills-container">
        {displaySkills.map((skill, index) => (
          <Link
            to={{
              pathname: `/skillverification/${skill.name}`,
              state: { imageUrl: skill.image },
            }}
            key={index}
            className="skill-link"
          >
            <div className="skill">
              <img src={skill.image} alt={skill.name} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SkillDisplay;
