import React from 'react'
import Home from './Home'
import Bollywood from './Bollywood'
import Hollywood from './Hollywood'
import Fitness from './Fitness'
import Technology from './Technology'
import Food from './Food'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import DataCompo from '../Store/Store'
import DynamicCompo from './DynamicCompo'
import HamburgerMenuCmp from './HamBurgerMenu'

const RouteCompo = () => {

  return (
    <>
        <BrowserRouter>
        <div id='navlink'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/bollywood'>Bollywood</NavLink>
        <NavLink to='/hollywood'>Hollywood</NavLink>
        <NavLink to='/fitness'>Fitness</NavLink>
        <NavLink to='/technology'>Technology</NavLink>
        <NavLink to='/food'>Food</NavLink>
        </div>
        <HamburgerMenuCmp/>

    

        <DataCompo>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/bollywood' element={<Bollywood/>}/>
                <Route path='/hollywood' element={<Hollywood/>}/>
                <Route path='/fitness' element={<Fitness/>}/>
                <Route path='/technology' element={<Technology/>}/>
                <Route path='/food' element={<Food/>}/>
                <Route path='/dynamic/:id' element={<DynamicCompo/>}/>
            </Routes>
        </DataCompo>
        </BrowserRouter>
    </>

    )
}

export default RouteCompo