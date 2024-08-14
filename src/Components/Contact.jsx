import React from 'react'
import Sidebar from './Sidebar'

function Contact() {
  return (
    <div>
      <div className='container-fluid'>
           <div className='row'>
                <div className='col-sm-2'>
                  <Sidebar/>
                </div>
                <div className='col-sm-10'>
                    <div className='mt-5'>
                        <h1 className='text-warning mb-5 border-bottom '>Contact</h1>
                        <div className='row mt-2 offset-1'>
                        <p className='text-danger text-center fs-5'>Do you Have Any Questions? Please do not hesitate to Conatct.
                           I will come back to you within a matter of hours to help you.</p>
                            <div className='col-sm-5 p-3 text-center'>
                                <h3 className='ss-color '>PHONE</h3>
                                <h3><i class="fa-solid fa-phone fa-1x i-colo"></i> 98XX XXXX XX</h3>
                            </div>
                            <div className='col-sm-5 p-3 text-center'>
                            <h3 className='ss-color '>Email</h3>
                            <h3><i class="fa-solid fa-envelope fa-1x i-colo"></i>asheeshjaiswal@gmail.com</h3>
                            </div>
                        </div>
                        <div className='col-sm-8 offset-2'>
                          <form className='row'>
                              <div className='col-sm-6'>
                                  <label for="name" className="form-label text-warning fw-bold">Name</label>
                                  <input type="text" className="form-control" id="name"/>
                              </div>
                              <div className='col-sm-6'>
                                 <label for="email" className="form-label text-warning fw-bold">Email</label>
                                 <input type="email" className="form-control" id="email"/>
                              </div>
                              <div className='col-sm-12 mt-2'>
                                   <label for='add' className='form-label text-warning fw-bold'>Your Messages</label>
                                   <textarea class="form-control" rows="5" name="message" id="add" required></textarea>
                              </div>
                              <div className='col-sm-2'>
                              <button className='btn btn-primary mt-3 btn-lg'>Submit</button>
                              </div>
                          </form>
                        </div>
                    </div>
                </div>
           </div>
      </div>
    </div>
  )
}

export default Contact
