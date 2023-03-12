import React, { useState } from 'react'
import './Main.css'
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
function Qu({qu,ans,key}) {
    const [show,setShow]=useState(false)
  return (
    <div className='qu'>
      <div className="qus" key={key}>
     <div>
      <h2>{qu}</h2>
     {show && <p>{ans}</p>}
     </div>
      <div className="btn">
      <h1 onClick={()=>setShow(!show)}>{!show ? <AiOutlinePlus/>:<AiOutlineMinus/>}</h1>
      </div>
      </div>
    </div>
  )
}

export default Qu
