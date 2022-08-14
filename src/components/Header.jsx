import React from 'react'
import notification from '../icons/NotificationBell.svg';
import dazziielogo from '../icons/icon3.svg';
import dazziielogo2 from '../icons/icon2.svg';


import "./Header.css";


export default function Header() {
  return (
    <div className='navbar'>

        <div className='left'>

        {/* <div className='logo'>
            <img src={dazziielogo} alt="dazzlle-icon" />
        </div>

        <div className='dazziiemain'>
            <h3 className='dazziie-name'>DAZZIIE</h3>
        </div> */}

        <ul>
             <li><img src={dazziielogo} alt=""/></li>
             <li>DAZZIIE</li>

        </ul>


            
        </div>



        <div className='profile'>
      
        {/* <div className='notification'>
            <img  src={notification} />
        </div>

        <div className='photo'>
           <img src={dazziielogo2} />
        </div>

        <div className='names'>
            <h3>Sumanto</h3>
            <p>cashier</p>
        </div>     */}
     
        <ul >
          <li> <img src={notification}    alt=""/></li>
          <li> <img  src={dazziielogo2}   alt=""/></li>
          <li>    <row className='navbar-names'> 
          <column className='large'>SUMANTO</column>
          <column className='small'>cashier</column>
          </row></li>
          </ul>
          
         
         


        
        

        </div>


    </div>
  )
}
