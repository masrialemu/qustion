import React, { useState } from 'react'
import './Main.css'
import Data from './Data'
import Qu from './Qu'
function Main() {
  const [use,setUse]=useState(Data)

  return (
    <div className='main'>
      <div className="mains">
        <h1>Questions and the answer</h1>
        <div className="List">
          <div className="list">
             {use.map((e)=><Qu key={e.id} qu={e.qu} ans={e.ans}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
