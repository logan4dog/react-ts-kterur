import * as React from "react";

export const Child = () => {

  React.useEffect(() => {
    //console.log("Running child useEffect ...");
  });

  return (<div>Child<br/><br/></div>);
};