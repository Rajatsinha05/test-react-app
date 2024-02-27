// Write Code here
// do a default export
import React from 'react'

function Image(props) {
    // console.log('props: ', props);
   
  return (
    <div>
      
<img src={props.src} alt={props.alt} height={props.height}  width={props.width}/>
<h2>{props.title}</h2>
    </div>
  )
}

export default Image