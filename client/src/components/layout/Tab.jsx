import React from "react";
import {Link,NavLink} from 'react-router-dom'

const Tab = () => {
  return (
    <div className="columns is-centered m-t-md">
      <div className="column is-half ">
        <div className="tabs is-toogle is-toggle is-toggle-rounded is-centered">
          <ul>
            <li >
              <NavLink to='/all' activeClassName="has-background-info">
                <span className="icon is-small">
                  <i className="fas fa-image" />
                </span>
                <span>All Pictures</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/upload' activeClassName="has-background-info">
                <span className="icon is-small">
                  <i className="fas fa-cloud-upload-alt" />
                </span>
                <span>Upload Image</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tab;
