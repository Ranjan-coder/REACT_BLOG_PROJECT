import React, { useContext } from 'react'
import { Store } from '../Store/Store'
import { NavLink } from 'react-router-dom'

const Home = () => {

  const [contextData] = useContext(Store)
  console.log(contextData)

  return (
    <>
      <h1>This is Home Page</h1>
      <div id='homeparent'>
        <div id='imghs1'>
        </div>
        <div id='imghs2'>
        </div>
        <div id='imghs3'>
        </div>
      </div>
      <div id='firstlatest'>The Latest</div>

      {
        contextData.map((item, index) => {
          return (
            <>
              <div >
                <NavLink to={`/dynamic/${item.id}`}>
                  <h2 className='itemheading'>{item.heading}</h2>
                  <img className='imageheight' src={item.image} alt='not found'/>
                </NavLink>
                <p>{item.description.slice(0,150)}...</p>
              </div>
            </>
          )
        })
      }
      <div>Latest Airtcle</div>
      <div className='latestheight'></div>

    </>
  )
}

export default Home