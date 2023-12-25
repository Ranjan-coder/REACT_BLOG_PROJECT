import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { useNavigate, useParams } from 'react-router-dom'

const DynamicCompo = () => {

    const paremId = useParams().id;

    const [contextData] = useContext(Store)
    const Navi = useNavigate()

  return (
    <>
    <div id='dynmbgc'>
       {contextData.filter((data)=>data.id === parseInt(paremId)).map((item,index)=>{
        return(
            <div key={index}>
                <h1 id='dynmheading'>{item.heading}</h1>
                <div id='dynmimgcenter'>
                <img id='dynmimg' src={item.image} alt='not found'/>
                </div>
                <p id='dynmdesc'>{item.description}</p>
            </div>
        )
       })}
    </div>
    <div id='dynmbtm'>
    <button id='dynmrevbtm' onClick={()=>Navi(-1)}>Go Back</button>
    </div>
    </>
  )
}

export default DynamicCompo