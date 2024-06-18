import React from "react";
import "../styles/SkillsPage.css";

const SkillsPage: React.FC = () => {
  return (
    <div>
      <div className="py-5">
        <h1>My Skills</h1>
      </div>
      <div className="d-flex gap-3 m-1">
        <div className="box">Java</div>
        <div className="box">Spring Boot</div>
      </div>
      <div className="d-flex gap-3 m-1">
        <div className="box">PHP</div>
        <div className="box">Javascript</div>
      </div>
      <div className="d-flex gap-3 m-1">
        <div className="box">HTML</div>
        <div className="box">CSS</div>
      </div>
    </div>
  );
};

export default SkillsPage;
