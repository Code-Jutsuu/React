import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Navbar() {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
      
      <div className="flex flex-shrink-0 items-center ml-3 text-white">
        <h1 className='text-lg w-10'><b>Portfolio </b></h1>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl p-1">
      <FontAwesomeIcon icon={faLinkedin}  className="text-white" />
      <FontAwesomeIcon icon={faTwitter}  className="text-white" />
      <FontAwesomeIcon icon={faGithub}  className="text-white" />
      </div >
      
    </nav>
    
  )
}

export default Navbar
