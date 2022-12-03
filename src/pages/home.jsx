import React from 'react'
import { Announcement } from '../components/Announcement'
import NavBar from '../components/NavBar'
import { Slider } from '../components/Slider'

const home = () => {
  return (
    <div className = 'container'>
      <Announcement/>
      <NavBar/>
      <Slider/>
    </div>
  )
}

export default home