import React from "react";

const Hero = () => {
  return (
    <React.Fragment>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Analyse Images with ML</h1>
            <h2 className="subtitle">
              Browse through the gallery and click on a picture to view it full size along with additional info from the AI. You can upload you own image and view it in the 'All Pictures' section. Be patient while the image gets uploaded.
            </h2>

          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
