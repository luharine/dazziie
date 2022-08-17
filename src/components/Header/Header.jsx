import React from 'react'
import notification from '../../icons/NotificationBell.svg';
import dazziielogo from '../../icons/icon3.svg';
import dazziielogo2 from '../../icons/icon2.svg';
import "./Header.css";


export default function Header() {
  return (
    <div className='navbar'>

        <div className='left'>
        <ul>
             <li><img src={dazziielogo} alt=""/></li>
             <li>DAZZIIE</li>

        </ul>
        </div>



        <div className='profile'>
      
     
         <ul >
          <li> <img src={notification}    alt=""/></li>
          <li> <img  src={dazziielogo2}   alt=""/></li>
          <li>    <row className='navbar-names'> 
          <column className='large'>Sumanto</column>
          <column className='small'>cashier</column>
          </row></li>
          </ul>
          
         </div>


    </div>
  )
}
