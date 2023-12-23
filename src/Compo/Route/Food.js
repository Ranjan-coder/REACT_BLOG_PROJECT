import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink } from 'react-router-dom'

const Food = () => {

  const [data] = useContext(Store)
  console.log(data)

  return (
    <>
      <div className='parentside'>
        <div>
          <div className='toppost'>Food</div>
          <div className='hrline'></div>
          {data.filter((e) => e.catagory === 'food').map((item, index) => {
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
          {data.filter((e) => e.catagory === 'food').map((item, index) => {
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
          <img className='advertimg' src='https://images.template.net/wp-content/uploads/2016/05/12063326/Smooth-the-Fruit-Ad-Poster-Download.jpg' alt='ad'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Food