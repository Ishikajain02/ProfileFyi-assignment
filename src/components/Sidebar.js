import React from 'react'
import Body from './Body'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
  return (
    <div className='flex flex-row'>
    {/*<div className=' p-2 m-2 h-screen flex shadow-2xl '>
    <div className='p-2 m-2 border border-b-gray-300 flex justify-between'>
      <h1 className='font-bold text-2xl'>BRAND</h1>
      <FontAwesomeIcon icon={faChevronDown} />

    </div>
    


    </div>*/}
    <Body/>
   </div>
  )
}

export default Sidebar