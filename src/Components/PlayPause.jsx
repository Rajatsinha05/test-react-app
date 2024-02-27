// Write Code here
// do a default export
import React, { useState } from 'react'

function PlayPause() {

  let [state ,setState]=useState("paused");
  const change=()=>{
if(state=="paused"){
  setState("playing")
}
else{
  setState("paused")
}

  }
  return (
    <>
    <h1>The state is {state}</h1>
    
    <button onClick={change}>{state}</button>
    </>
  )
}

export default PlayPause
