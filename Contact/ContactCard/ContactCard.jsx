import React, { useState } from 'react'
import "./ContactCard.scss"
import img1 from "../../../../assets/category/FullStack.png"
import img2 from "../../../../assets/category/cyberSecurity.png"
import img3 from "../../../../assets/category/datascience.png"


const ContactCard = () => {

  const [show1,setShow1] = useState(true);
  const [show2,setShow2] = useState(false);
  const [show3,setShow3] = useState(false);

  

  const handleBar1 = ()=>{
    setShow1(true)
    setShow2(false)
    setShow3(false)
    
  }

  const handleBar2 = ()=>{
    setShow2(true)
    setShow1(false)
    setShow3(false)
    
  }

  const handleBar3 = ()=>{
    setShow3(true)
    setShow1(false)
    setShow2(false)
    
  }
  return (
    <>

    <div className='btn'>
      <button onClick={handleBar1}>Form</button>
      <button onClick={handleBar2}>call</button>
      <button onClick={handleBar3}>email</button>
      </div>
      <div className='mainc'>


        <div className="container">
          <div className="image-container">

            {show1 ?
              <img src={img1} alt='' /> :null
            }
           
                
           

            {show2 ?
              <img src={img2} alt='' /> :null
            }
              
         
{show3 ?
  
  <img src={img3} alt='' /> :null
}
            
            
         
            



          </div>
        </div>
      </div>
    </>
  )
}

export default ContactCard