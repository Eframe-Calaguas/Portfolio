import React from "react";

const IntroductionCard: React.FC = () => {
  return (
    <div className="d-flex ">
      <div className="py-5 w-100">
        <img
          src="src\assets\images\profile1.JPG"
          className="card-img-top"
          alt="my profile picture"
        />
      </div>
      <div className="p-5 d-flex justify-content-center flex-column ">
        <h5>Hello, I'm Eframe Calaguas</h5>
        <h1 style={{ fontSize: "60px" }}>
          Software Engineer and Web Developer
        </h1>
        <h6> Based in Pampanga, Philippines.</h6>

        <div>
          <button className="btn btn-secondary py-3 mt-4">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default IntroductionCard;
