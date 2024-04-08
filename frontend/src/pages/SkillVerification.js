import React from "react";
import { useLocation } from "react-router-dom";
import html from "../images/html.png";
import css from "../images/css.png";
import java from "../images/javascript.jpg";
import react from "../images/react.jpg";
import nodejs from "../images/nodejs.png";
import python from "../images/python.png";

const SkillVerification = () => {
  const location = useLocation();
  const skillName = location.pathname.split("/").pop(); 

  const skillImages = {
    html: html,
    css: css,
    javascript: java,
    react: react,
    nodejs: nodejs,
    python: python,
  };

  const imageUrl = skillImages[skillName];

  return (
    <div className="SkillVerification">
      <h2>Skill Verification</h2>
      <div>
        <img src={imageUrl} alt={skillName} />
      </div>
      <div>
        <input type="text" placeholder="Enter URL" />
      </div>
    </div>
  );
};

export default SkillVerification;
