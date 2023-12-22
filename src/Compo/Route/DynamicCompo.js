import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { useNavigate, useParams } from 'react-router-dom'

const DynamicCompo = () => {

    const paremId = useParams().id;

    const [contextData] = useContext(Store)
    const Navi = useNavigate()

  return (
    <>
    <div>
       {contextData.filter((data)=>data.id === parseInt(paremId)).map((item,index)=>{
        return(
            <div key={index}>
                <h1>{item.heading}</h1>
                <img src={item.image} alt='not found' height={'100px'}/>
                <p>{item.description}</p>
            </div>
        )
       })}
    </div>
    <button onClick={()=>Navi(-1)}>Go Back</button>
    </>
  )
}

export default DynamicCompo