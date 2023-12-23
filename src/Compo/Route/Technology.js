import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink } from 'react-router-dom'

const Technology = () => {

  const [data] = useContext(Store)
  console.log(data)

  return (
    <>
      <div className='parentside'>
        <div>
          <div className='toppost'>Technology</div>
          <div className='hrline'></div>
          {data.filter((e) => e.catagory === 'technology').map((item, index) => {
            return (
              <>
                <div className='parentcontent'>
                  <div className='childc1'>
                  <NavLink to={`/dynamic/${item.id}`}>
                    <img className='imageheight' src={item.image} alt='not found' />
                  </NavLink>
                  </div>

                  <div className='childc2'>
                  <NavLink to={`/dynamic/${item.id}`}>
                    <h2>{item.heading}</h2>
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
          {data.filter((e) => e.catagory === 'technology').map((item, index) => {
            return (
              <>
                <div>
                  <NavLink to={`/dynamic/${item.id}`}>
                    <h2>{item.heading}</h2>
                    <img className='imageheight' src={item.image} alt='not found' />
                  </NavLink>
                  <p>{item.description.slice(0,150)}...</p>
                </div>
                <hr />
              </>
            )
          })}
          <div className='advertisement'>
            <img className='advertimg' src='https://i.pinimg.com/474x/3b/ae/85/3bae85eee64f1b947a1c91f37dfd333b.jpg' alt='ad'/>
          </div>
        </div>
      </div>

    </>
  )
}

export default Technology