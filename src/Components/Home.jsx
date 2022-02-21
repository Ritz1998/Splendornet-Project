import React  from 'react'

import Checkstatus from './Checkstatus'
import { useNavigate } from 'react-router-dom'



function Home() {
    
    let navigate=useNavigate()
  const logout=()=>[
     navigate('/')
  ]
 

  return (
      
    <div>
        <h1 className='Homeheading'>  Welcome To Home Component </h1>

        <button onClick={logout} type="button" style={{position:"absolute",right:0}} class="btn btn-danger">Logout</button>


        <Checkstatus/>
        
    </div>
  )
}

export default Home