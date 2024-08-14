import React from 'react'
import Sidebar from './Sidebar'
import { useNavigate } from 'react-router-dom'

function Home() {
   const navigate =  useNavigate()
  return (
    <div>
      <div className='container-fluid'>
           <div className='row'>
                <div className='col-sm-2'>
                  <Sidebar/>
                </div>
                <div className='col-sm-10'>
                      <div className='mt-5'>
                          <div className='text-center'>
                          <img src='https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                               alt='ProfilePic'
                               className='img-thumbnail'
                               style={{
                                  width:'250px',
                                  height:'250px',
                               }}   
                            />
                          </div>
                        <div className='text-white mt-5 mx-5 text-justify'>
                            <h1 className='fw-bold st-font'>Hello,</h1>
                            <div className='px-4' style={{lineHeight:'1.7rem'}}>
                                <p style={{textIndent:'100px'}}>I am <span className='text-warning fs-3'>Ashish jaiswal </span>
                                having knowledge of full stack development. I am fresher in this field.
                                I know Python Full Stack development Django Web framwork and Django Rest API 
                                Know I have. I build some major Projects in Django and Django Rest APi
                                I have Completed my 6 month Training in Python Full stack development from  
                                <span className='text-primary fs-3'> Ducat Noida </span>in Guidence of Neeraj Sir
                                Completed Internship from DigiCoders technology Lucknow.
                                I have knowledge of ReactJs and NodeJs also and learning Mern Stack development also.
                                Creating Some Project on Mern Stack Development for Skill.
                                </p>
                            </div>
                            <div className='text-center '>
                               <button className='btn btn-outline-success btn-lg my-3 me-4'>Hire Me</button>
                               <button className='btn btn-outline-primary btn-lg my-3' onClick={()=>navigate('/contact')}>Contact</button>
                            </div>
                        </div>
                      </div>
                </div>
           </div>
      </div>
    </div>
  )
}

export default Home
