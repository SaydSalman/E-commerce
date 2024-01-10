import React from 'react'
import { Link } from 'react-router-dom'
Link

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className=' mt-5'>
        <div className="container   ">
            <div className="row m-2 ">
                <div className="col-lg-3">
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h4 style={{height:'30px'}}>E Cart</h4>
                    <span>Designed and built with all the love in the world by  Luminar team with the help of our contributors</span>
                    <span className='mt-1'>Code Licensed Luminar,done CC BY 3.0</span>
                    <span className='mt-1 mb-2'>Currently v1.0.0</span>
                    </div>
                </div>
                <div className="col-lg-3 ">
                    <h4 className='ms-3 text-center' style={{height:'30px'}}>Links</h4>
                    <ul>
                        <Link style={{textDecoration:'none'}} to={'/'}><li  className='text-center '>Home</li></Link>
                        <li className='text-center'>Cart</li>
                        <li className='text-center'>Wishlist</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h4 className='ms-3 text-center' style={{height:'30px'}}>Guides</h4>
                    <ul>
                        <li className='text-center'>React</li>
                        <li className='text-center'>React Bootstrap</li>
                        <li className='text-center'>Routing</li>
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h4 style={{height:'30px'}}>Contact Us</h4>
                    <div className='d-flex'>
                        <input placeholder='Enter Your Email' className='form-control' type="text" />
                        <button className='btn btn-warning ms-2'><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className='d-flex justify-content-between mt-2'>
                    <i style={{height:'50px'}} class="fa-brands fa-linkedin fa-2x "></i>
                    <i class="fa-brands fa-github fa-2x "></i>
                    <i  class="fa-brands fa-youtube fa-2x  "></i>
                    <i class="fa-brands fa-twitter fa-2x "></i>
                    <i class="fa-brands fa-facebook fa-2x "></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className='text-center mt-2'>
                    <span>Copyright @ 2023 E cart .Built with React</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
