import React from "react";

var Main = (props) => {
    return <div>
      <div>
        <div>
          {props.children}
        </div>
      </div>
    </div>;
};

export default Main;