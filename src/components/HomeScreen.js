import React from 'react'
import './../css/HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import Movies from './Movies'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Movies />
        </div>
    )
}

export default HomeScreen
