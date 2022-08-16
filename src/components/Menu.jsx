import React from 'react';
import {NavLink} from 'react-router-dom';
import Food from './Food';
import './Menu.css';

export default function Menu() {

  const NavLinkStyle = ({isActive})=>
  {return{
    
    color: isActive ? "#5541d7" : '#92929d',
    textDecoration: isActive ? "underline 3px" : 'none',
    
    
    
  }
}


  return (
    <div className='component'>
       <div className='inner-component'>
      <div className='search'>
        <input type='text' placeholder='🔎  Search Here ....' />
        </div>

      <div className='categories'>
         <ul>
              <li> <NavLink style={NavLinkStyle} to='/menu'>All</NavLink>  </li> 
              <li> <NavLink style={NavLinkStyle} to='/menu/food' >Food</NavLink>  </li> 
              <li> <NavLink style={NavLinkStyle} to='/menu/drinks'>Drinks</NavLink>  </li> 
              <li> <NavLink style={NavLinkStyle} to='/menu/snack'>Snack</NavLink>  </li>
              <li> <NavLink style={NavLinkStyle} to='/menu/packages'>Packages</NavLink>  </li>
             


         </ul>
        </div>
        <div className='items-title'><h2>Food</h2></div>

       <div className='cards-1'>

        <ul>
          <li>{<Food/>}</li>
          <li>{<Food/>}</li>
          <li>{<Food/>}</li>
          <li>{<Food/>}</li>
          <li>{<Food/>}</li>
          <li>{<Food/>}</li>
          <li>{<Food/>}</li>
          <li>{<Food/>}</li>
          
        </ul>
        
          
        </div> 
        <div className='items-title'><h2>Drinks</h2></div>

        <div className='cards-2'>
        
        <ul>
          <li>{<Food/>}</li>
          <li>{<Food/>}</li>
          <li>{<Food/>}</li>
          <li>{<Food/>}</li>
          <li>{<Food/>}</li>
          <li>{<Food/>}</li>
          <li>{<Food/>}</li>
          <li>{<Food/>}</li>
          
        </ul>
          
        </div> 


        

    </div>
    </div>
  )
}
