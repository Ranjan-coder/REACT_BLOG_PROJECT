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
          {/* <img  src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.170537123.1691316877&semt=sph' alt='car image' /> */}
        </div>
        <div id='imghs2'>
          {/* <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvlmiOS1zeQApwAQDSCj0LkyrQ9MK3PSYjA&usqp=CAU' /> */}
        </div>
        <div id='imghs3'>
          {/* <img  src='https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjBzaXplfGVufDB8fDB8fHww' alt='nature image' /> */}
        </div>
      </div>
      <div id='firstlatest'>The Latest</div>

      {
        contextData.map((item, index) => {
          return (
            <>
              <div >
                <NavLink to={`/dynamic/${item.id}`}>
                  <h2>{item.heading}</h2>
                  <img className='imageheight' src={item.image}/>
                </NavLink>
                <p>{item.description.slice(0,150)}...</p>
              </div>
              <div>some text</div>
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