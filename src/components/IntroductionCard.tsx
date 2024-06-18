import React from "react";

const IntroductionCard: React.FC = () => {
  return (
    <div className="d-flex">
      <div className="py-5 text-center">
        <div className="card py-5 text-center" style={{ width: "26rem" }}>
          <img
            src="src\assets\images\profile.JPG"
            className="card-img-top p-2"
            alt="my profile picture"
          />
          <div className="card-body">
            <h5 className="card-title">Eframe Calaguas</h5>
            <p className="card-text">Available for work</p>
          </div>
        </div>
      </div>
      <div className="p-5 d-flex justify-content-center flex-column">
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
