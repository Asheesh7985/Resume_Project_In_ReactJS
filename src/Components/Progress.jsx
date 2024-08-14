import React from 'react'

function Progress(props) {
  return (
    <div>
        <h3 className='mt-5'>{props.name}</h3>
                <div className='progress'>
                    <div className='progress-bar progress-bar-striped progress-bar-animated' 
                         role='progressbar'
                         style={{width: `${props.progress}%`}}
                         aria-valuenow={props.value}
                         aria-valuemin='0'
                         aria-valuemax='100'>
                        {props.per}
                    </div>
                </div>
    </div>
  )
}

export default Progress
