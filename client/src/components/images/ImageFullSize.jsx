import React, { useState } from "react";

const ImageFullSize = props => {
  const [modalStatus, setStatus] = useState("");
  const openModal = () => {
    setStatus("is-active");
  };
  const closeModal = () => {
    setStatus("");
  };
  return (
    <React.Fragment>
      <div
        style={{ minHeight: "400px" }}
        className="card cardpont"
        onClick={openModal}
      >
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.url} alt={`${props.description} image`} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.originalname}</p>
            </div>
          </div>

          <div className="content">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div className={`modal ${modalStatus}`}>
        <div onClick={closeModal} className="modal-background" />
        <div className="modal-content">
          <div
            style={{ padding: "10px" }}
            className="has-background-light content"
          >
            <img src={props.url} alt={props.description} />
            <p>This is a paragraph</p>
          </div>

        </div>
        <button
          onClick={closeModal}
          className="modal-close is-large"
          aria-label="close"
        />
      </div>
    </React.Fragment>
  );
};

export default ImageFullSize;
