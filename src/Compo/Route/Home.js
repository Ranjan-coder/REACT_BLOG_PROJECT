import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink } from 'react-router-dom'


const Home = () => {

  const [data] = useContext(Store)

  return (
    <>

      <div className='newhomeimage'>
        <div className='image homeimage1'></div>
        <div className='image homeimage2'></div>
        <div className='image homeimage3'></div>
      </div>


      <div className='homelatest'>
      <div className='toppost'>The Latest</div>
      <div className='hrline'></div>
      </div>

      <div id='homedata'>
        {
          data.filter((data) => data.id % 20 === 0).map((item, index) => {
            return (
              <>
                <div id='homedatacontent'>
                  <NavLink to={`/dynamic/${item.id}`}>
                    <h2 className='itemheading'>{item.heading}</h2>
                    <img className='imageheight' src={item.image} alt='not found' />
                  </NavLink>
                  <p className='itemdesc descriptionwidth'>{item.description.slice(0, 150)}...</p>

                </div>
              </>
            )
          })
        }
      </div>
      <div className='homelatest'>
      <div className='toppost'>Latest Airtcle</div>
      <div className='hrline'></div>
      </div>

      <div className='parentside'>
        <div className='leftchild'>
          {/* if we give 18 it will give 4 different data  */}
          {data.filter((data) => data.id % 9 === 0).map((item, index) => {
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
        <div className='homeadvertisement'>
            <img className='homeadvertimg' src='https://i.pinimg.com/736x/12/ff/fd/12fffdd0d71dd1151eec5751177ff662.jpg' alt='ad' />
          </div>
          <div className='toppost hometoppost'>Top Posts</div>
          <div className='hrline'></div>
          <div>
            {data.filter((e) => e.catagory === 'bollywoodt' && e.topost === 'firsttop').map((item, index) => {
              return (
                <>
                  <div>
                    <NavLink to={`/dynamic/${item.id}`}>
                      <img className='imageheight tphw' src={item.image} alt='not found' />
                      <h2 className='itemheading'>{item.heading}</h2>
                    </NavLink>
                  </div>
                
                </>
              )
            })}
          </div>

          <div>
            {data.filter((data) => data.id % 5 === 0 && (data.id >= 90) ).map((item, index) => {
              return (
                <>
                <hr />
                  <div className='smalltopost'>
                    <NavLink to={`/dynamic/${item.id}`}>
                      <img className='imageheight tphwsmall imageheighthome' src={item.image} alt='not found' />
                    </NavLink>
                    <NavLink to={`/dynamic/${item.id}`}>
                      <h2 className='itemheading'>{item.heading}</h2>
                    </NavLink>
                  </div>
                  
                </>
              )
            })}
          </div>
          

        </div>
      </div>

    </>
  )
}

export default Home