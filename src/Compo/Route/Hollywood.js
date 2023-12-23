import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink } from 'react-router-dom'

const Hollywood = () => {

  const [data] = useContext(Store)
  console.log(data)

  return (
    <>
      <div className='parentside'>
        <div>
          <div className='toppost'>Hollywood</div>
          <div className='hrline'></div>
          {data.filter((e) => e.catagory === 'hollywood').map((item, index) => {
            return (
              <>
                <div className='parentcontent'>
                  <div className='childc1'>
                  <NavLink to={`/dynamic/${item.id}`}>
                    {/* <h2>{item.heading}</h2> */}
                    <img className='imageheight' src={item.image} alt='not found' />
                  </NavLink>
                  </div>

                  <div className='childc2'>
                  <NavLink to={`/dynamic/${item.id}`}>
                    <h2 className='itemheading'>{item.heading}</h2>
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
          {data.filter((e) => e.catagory === 'hollywood').map((item, index) => {
            return (
              <>
                <div>
                  <NavLink to={`/dynamic/${item.id}`}>
                    <h2 className='itemheading'>{item.heading}</h2>
                    <img className='imageheight' src={item.image} alt='not found' />
                  </NavLink>
                  <p>{item.description.slice(0,150)}...</p>
                </div>
                <hr />
              </>
            )
          })}
          <div className='advertisement'>
            <img className='advertimg' src='https://i.pinimg.com/564x/1c/de/7f/1cde7fa7ad3a53a9393982ab7abd8701.jpg' alt='ad'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hollywood