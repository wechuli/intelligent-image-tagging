import React from "react";
import { Switch, Route } from "react-router-dom";
import Hero from "./components/layout/Hero";
import Tab from "./components/layout/Tab";
import Images from "./components/images/Images";
import ImageUpload from "./components/images/ImageUpload";

const App = () => {
  return (
    <React.Fragment>
      <Hero />
      <div className="container">
        <Tab />
        <Switch>
          <Route exact path='/' component={Images}/>
          <Route exact path='/upload' component={ImageUpload}/>

          </Switch>
      </div>
    </React.Fragment>
  );
};

export default App;
