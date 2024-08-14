import React from 'react'

function Single(props) {
  return (
    <div>
       <i className={props.i}></i>
       <h4>{props.name}</h4>
       <p className='ss-color'>{props.name2}</p>
    </div>
  )
}

export default Single
