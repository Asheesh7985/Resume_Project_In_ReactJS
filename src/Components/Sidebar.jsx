import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    const activelink = 'nav-link'
    const link = ''

  return (
    <div>
        <div className='border-end border-warning h-100 '>
            <div className='text-center'>
                <img src='https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                    alt='profilePic' 
                    className='img-fluid  mt-5' 
                    style={{
                        borderRadius:'50%',
                        objectFit:'cover',
                    }}
                    width='150px' 
                    height='1500px'
                />
                <h3 className='text-white mt-3 st-font'>Ashish Jaiswal</h3>
            </div>
                <hr className='border border-light'/>
                <nav className='nav flex-column text-center'>
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                    <NavLink to='/services' className='nav-link'>Services</NavLink>
                    <NavLink to='/Skill' className='nav-link'>Skill</NavLink>
                    <NavLink to='/Contact' className='nav-link'>Contact</NavLink>
                </nav>
        </div>
    </div>
  )
}

export default Sidebar
