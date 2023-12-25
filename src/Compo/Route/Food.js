import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink } from 'react-router-dom'

const Food = () => {

  const [data] = useContext(Store)
  console.log(data)

  return (
    <>
      <div className='parentside'>
        <div className='leftchild'>
          <div className='toppost'>Food</div>
          <div className='hrline'></div>
          {data.filter((e) => e.catagory === 'food').map((item, index) => {
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
                      <h2 className='itemheading'>{item.heading}</h2>
                    </NavLink>
                    <p className='itemdesc'>{item.description.slice(0, 130)}...</p>
                  </div>
                </div>

              </>
            )
          })}
        </div>
        <div className='righttchild'>
          <div className='toppost'>Top Posts</div>
          <div className='hrline'></div>
          <div >



            {data.filter((e) => e.catagory === 'foodt' && e.topost === 'firsttop').map((item, index) => {
              return (
                <>
                  <div className='firstsmalltoppost'>
                    <NavLink to={`/dynamic/${item.id}`}>
                      <img className='imageheight tphw' src={item.image} alt='not found' />
                      <h2 className='itemheading'>{item.heading}</h2>
                    </NavLink>
                  </div>
                  <hr />
                </>
              )
            })}
          </div>

          <div>
            {data.filter((e) => e.catagory === 'foodt' && ((e.id >= 96) && (e.id <= 98))).map((item, index) => {
              return (
                <>
                  <div className='smalltopost'>
                    <NavLink to={`/dynamic/${item.id}`}>
                      <img className='imageheight tphwsmall' src={item.image} alt='not found' />
                    </NavLink>
                    <NavLink to={`/dynamic/${item.id}`}>
                      <h2 className='itemheading'>{item.heading}</h2>
                    </NavLink>
                  </div>
                  <hr />
                </>
              )
            })}
          </div>
          <div className='advertisement'>
            <img className='advertimg' src='https://i.pinimg.com/564x/88/7b/b8/887bb8476194c54c465a440e0709f62d.jpg' alt='ad' />
          <img className='advertimg2' src='https://i.pinimg.com/564x/00/44/7c/00447c579f30636387cc19a651d65758.jpg' alt='not found'/>
          </div>

        </div>
      </div>
    </>
  )
}

export default Food