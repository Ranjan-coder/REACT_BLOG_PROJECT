import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink } from 'react-router-dom'

const Bollywood = () => {
  const [data] = useContext(Store)
  console.log(data)
  return (
    <>
      <div className='parentside'>
        <div>
          <div className='toppost'>Bollywood</div>
          <div className='hrline'></div>
          {data.filter((e) => e.catagory === 'bollywood').map((item, index) => {
            return (
              <>
                  <hr/>
                <div className='parentcontent'>
                  <div className='childc1'>
                    
                  <NavLink to={`/dynamic/${item.id}`}>
                    {/* <h2>{item.heading}</h2> */}
                    <img className='imageheight' src={item.image} alt='image not found' />
                  </NavLink>
                  </div>

                  <div className='childc2'>
                  <NavLink to={`/dynamic/${item.id}`}>
                    <h2>{item.heading}</h2>
                    {/* <img className='imageheight' src={item.image} alt='image not found' /> */}
                  </NavLink>
                  <p>{item.description.slice(0,150)}...</p>
                  </div>
                </div>
                
              </>
            )
          })}
        </div>
        <div>
          <div className='toppost'>Top Posts</div>
          <div className='hrline'></div>
          {data.filter((e) => e.catagory === 'bollywood').map((item, index) => {
            return (
              <>
                <div>
                  <NavLink to={`/dynamic/${item.id}`}>
                    <h2>{item.heading}</h2>
                    <img className='imageheight' src={item.image} alt='image not found' />
                  </NavLink>
                  <p>{item.description.slice(0,150)}...</p>
                </div>
                <hr />
              </>
            )
          })}
          <div className='advertisement'>
            <img className='advertimg' src='https://i.pinimg.com/736x/12/ff/fd/12fffdd0d71dd1151eec5751177ff662.jpg'/>
          </div>
        </div>
      </div>
    </>

  )
}

export default Bollywood