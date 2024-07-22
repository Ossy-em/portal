import React from 'react'
import './CompanyName.css'
import images from '../CompanyName/NSCLogo.png'

const CompanyName = () => {
  return (
    <div className='CompanyName'>
   <div className='images'>  
    
     <img src={images} alt='image' style={{ width: '180px', height: '150px' }}/>
   
   </div>
      {/* <h3>Nigeria Shippers Council</h3> */}
      
    </div>
  )
}

export default CompanyName
