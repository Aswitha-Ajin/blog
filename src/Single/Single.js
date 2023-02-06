import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Singlepost from '../Singlepost/Singlepost'
import "../Single/single.css"
//import Content from '../Content/Content'


function Single() {
  return (
    <div className='single'>
        <Singlepost/>
      < Sidebar/>
    </div>
  )
}

export default Single
