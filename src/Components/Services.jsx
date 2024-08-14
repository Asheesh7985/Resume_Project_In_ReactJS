import React from 'react'
import Sidebar from './Sidebar'
import Single from './Single'

function Services() {
  return (
    <div>
      <div className='container-fluid'>
           <div className='row'>
                <div className='col-sm-2'>
                  <Sidebar/>
                </div>
                <div className='col-sm-10'>
                   <div className='mt-4'>
                      <h1 className='text-warning mb-4 border-bottom '>Services</h1>
                      <div className='container'>
                         <div className='row text-white text-center mb-4'>
                              <div className='col-sm-4'>
                                 <Single 
                                         i="fa-solid fa-magnifying-glass-dollar fa-2x mb-3 i-colo"
                                         name='SEO' 
                                         name2='lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque.'
                                        
                                    />
                              </div>
                              <div className='col-sm-4'>
                                 <Single 
                                        i='fa-solid fa-palette fa-2x mb-3 i-colo'
                                        name='Web Designing' 
                                        name2='lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque.'  
                                 />
                              </div>
                              <div className='col-sm-4'>
                                 <Single
                                       i="fa-solid fa-code fa-2x mb-3 i-colo"
                                       name='web Development'
                                       name2='lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque.' 
                                 />
                              </div>
                         </div>
                         <div className='row text-white text-center mb-5'>
                              <div className='col-sm-4'>
                                   <Single
                                         i="fa-brands fa-apple fa-2x mb-3 i-colo"
                                         name='IOS Development'
                                         name2='lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque.' 
                                   />
                                  
                               </div>
                              <div className='col-sm-4'>
                                    <Single
                                       i="fa-brands fa-android fa-2x mb-3 i-colo"
                                       name='Androide Development'
                                       name2='lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque.' 
                                   />
                                  
                              </div>
                              <div className='col-sm-4'>
                                   <Single
                                       i="fa-solid fa-database fa-2x mb-3 i-colo"
                                       name='Hoisting'
                                       name2='lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque.' 
                                   />
                                  
                              </div>
                         </div>
                         <div className='row text-white text-center mb-5'>
                              <div className='col-sm-4'>
                                    <Single
                                        i="fa-solid fa-pencil fa-2x mb-3 i-colo"
                                        name="Logo Desgine"
                                        name2 = "lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque."
                                    />
          
                               </div>
                              <div className='col-sm-4'>
                                   <Single
                                       i="fa-solid fa-headset fa-2x mb-3 i-colo"
                                       name="Support"
                                       name2="lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque."
                                   />
                                   
                              </div>
                              <div className='col-sm-4'>
                                   <Single
                                        i="fa-solid fa-ad fa-2x mb-3 i-colo"
                                        name='Advertising'
                                        name2='lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora neque.'
                                   />
                                   
                              </div>
                         </div>
                      </div>
                   </div>
                </div>
           </div>
      </div>
    </div>
  )
}

export default Services
