import React from 'react'
import Sidebar from './Sidebar'
import Progress from './Progress'

function Skill(props) {
  return (
    <div>
      <div className='container-fluid'>
           <div className='row'>
                <div className='col-sm-2'>
                  <Sidebar/>
                </div>
                <div className='col-sm-10'>
                    <div className='mt-5 '>
                        <h1 className='text-warning mb-5 border-bottom '>Skills</h1>
                        <div className='row text-white mt-5 px-5'>
                            <div className='col-sm-5'>
                                <Progress name='Html' value='70' per='70%' progress="70" /> 
                            </div>
                            <div className='col-sm-5 offset-1'>
                                <Progress name='CSS' value='50' per='50%' progress="50" /> 
                            </div>
                            
                        </div>
                        <div className='row text-white mt-5 px-5'>
                            <div className='col-sm-5'>
                                <Progress name='Python' value='80' per='80%' progress="80" /> 
                            </div>
                            <div className='col-sm-5 offset-1'>
                                <Progress name='Django' value='70' per='70%' progress="70" /> 
                            </div>
                            
                        </div>
                        <div className='row text-white mt-5 px-5'>
                            <div className='col-sm-5'>
                                <Progress name='ReactJs' value='50' per='50%' progress="50" /> 
                            </div>
                            <div className='col-sm-5 offset-1'>
                                <Progress name='MYSQL' value='70' per='70%' progress="70" /> 
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
           </div>
      </div>
    </div>
  )
}

export default Skill
