import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink } from 'react-router-dom'

const Fitness = () => {

  const [data] = useContext(Store)
  console.log(data)

  return (
    <>
      <div className='parentside'>
        <div>
          <div className='toppost'>Fitness</div>
          <div className='hrline'></div>
          {data.filter((e) => e.catagory === 'fitness').map((item, index) => {
            return (
              <>
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
                <hr />
              </>
            )
          })}
        </div>
        <div>
          <div className='toppost'>Top Posts</div>
          <div className='hrline'></div>
          {data.filter((e) => e.catagory === 'fitness').map((item, index) => {
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
            <img className='advertimg' src='https://i.pinimg.com/236x/a5/95/2d/a5952d8a2b151a81938ac4aa6db046f8.jpg'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Fitness