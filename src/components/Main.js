import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Body from './Body'

const Main = () => {
  return (
    <div className='flex flex-col items-center  min-w-min min-h-min'>
        <Nav/>
        <Sidebar/>
        
    </div>
  )
}

export default Main