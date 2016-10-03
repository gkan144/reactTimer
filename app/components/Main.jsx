import React from "react";

import Navigation from "./Navigation";

var Main = (props) => {
    return <div>
      <Navigation />
      <div>
        <div>
          {props.children}
        </div>
      </div>
    </div>;
};

export default Main;