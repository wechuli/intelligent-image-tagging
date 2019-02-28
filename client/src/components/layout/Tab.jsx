import React from "react";
import {Link} from 'react-router-dom'

const Tab = () => {
  return (
    <div className="columns is-centered m-t-md">
      <div className="column is-half ">
        <div className="tabs is-toogle is-toggle is-toggle-rounded is-centered">
          <ul>
            <li className="is-active">
              <Link to='/'>
                <span class="icon is-small">
                  <i className="fas fa-image" />
                </span>
                <span>All Pictures</span>
              </Link>
            </li>
            <li>
              <Link to='/upload'>
                <span className="icon is-small">
                  <i className="fas fa-cloud-upload-alt" />
                </span>
                <span>Upload Image</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tab;
