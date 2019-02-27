import React from "react";

const Hero = () => {
  return (
    <React.Fragment>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Analyse Images with ML</h1>
            <h2 className="subtitle">
              Upload an image and the AI will attempt to describe it, or just
              view what has already been uploaded and enjoy. Click on an image to expand it.
            </h2>

          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
