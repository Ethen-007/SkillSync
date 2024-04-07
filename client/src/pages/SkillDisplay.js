import React from "react";
import { Link } from "react-router-dom";
import HTMLImage from "../images/html.png"; // Import images for each skill
import CSSImage from "../images/css.png";
import JavaScriptImage from "../images/javascript.jpg";
import ReactImage from "../images/react.jpg";
import NodeJSImage from "../images/nodejs.png";
import PythonImage from "../images/python.png";
// Import CSS file for styling

const SkillDisplay = () => {
  // Define the skills array with names and image URLs
  const skills = [
    { name: "html", image: HTMLImage },
    { name: "css", image: CSSImage },
    { name: "javascript", image: JavaScriptImage },
    { name: "react", image: ReactImage },
    { name: "nodejs", image: NodeJSImage },
    { name: "python", image: PythonImage },
  ];

  // Ensure we have at most 6 skills to display
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
