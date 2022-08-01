import React from 'react'
import { Link } from 'react-router-dom';
export default function 
() {
  return (
    <div className='selectdoctor'>
        <div className="d1">
            <div><p>Name:Chinnappan</p>
            <p>Specialization:Pediatrician</p>
            
            </div>
            <Link to="/appointment"><button>BOOK</button></Link>
        </div>

        <div className='d2'>
            <div><p>Name:Unnikuttan</p>
            <p>Specialization:Psychatrist</p>
          
          </div>
          <Link to="/appointment"><button>BOOK</button></Link>
        </div>
    </div>
  )
}
