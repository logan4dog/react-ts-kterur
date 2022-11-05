import * as React from 'react';
import { useEffect, useLayoutEffect } from 'react'
import './style.css';

function Child(){
  console.log("Rendering child ...");

  useEffect(() => {
    console.log("Running child useEffect ...");
  },[]);

  useLayoutEffect(() => {
    console.log("Running child useLayoutEffect");
  })

  

  return <div>Child</div>
}

export default function App() {

  console.log("Rendering App...");

  useEffect(() => {
    console.log("Running useEffect ...");
  },[]);

  useLayoutEffect(() => {
    console.log("Running useLayoutEffect ...");
  },[]);

  return (
    <div className="App">
      {console.log("Before child.")}
      <Child></Child>
      {console.log("After child.")}
    </div>
  );
}
