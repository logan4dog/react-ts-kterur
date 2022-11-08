import * as React from "react";

export const Child = (props) => {

  React.useEffect(() => {
    //console.log("Running child useEffect ...");
  });

  return (<div>Child<br/><br/>{ props.msg}</div>);
};