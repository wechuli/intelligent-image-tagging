import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageFullSize from "./ImageFullSize";

const Images = props => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/all")
      .then(response => {
        setImages(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <React.Fragment>
      <div className="columns is-multiline">
        {images.map(image => {
          return (
            <div key={image._id} className="column is-3">
              <ImageFullSize {...image} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Images;
