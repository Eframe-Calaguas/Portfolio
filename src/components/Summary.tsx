import React from "react";

const Summary: React.FC = () => {
  return (
    <div className="bg-light rounded p-5 mt-4">
      <section className="d-flex justify-content-center text-dark">
        <h1>I'M EFRAME CALAGUAS</h1>
      </section>

      <div className="container text-center bg-dark rounded py-2 text-light">
        <div className="row justify-content-md-center">
          <div className="col">Software Engineer </div>
          <div className="col">Web Developer</div>
          <div className="col">Web Designer</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
