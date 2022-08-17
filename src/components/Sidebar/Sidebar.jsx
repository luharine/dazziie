import React from 'react'
import menu from '../../icons/menu.svg';
import orders from '../../icons/orders.svg';
import customer from '../../icons/customer.svg';
import package1 from '../../icons/Package.svg';
import coupon from '../../icons/coupon.svg';
import employee from '../../icons/user.svg';
import setting from '../../icons/seettings.svg';
import {NavLink} from 'react-router-dom';
import './Sidebar.css';




export default function Sidebar() {

    const NavLinkStyle = ({isActive})=>
       {return{
         backgroundColor: isActive ? "#5541d7" : '#fff',
         
         
       }
    }
    

  return (
    <nav>
    <div className='main' id='main'>
 <div className='top'>
<ul>
      
      
        <li><NavLink style={NavLinkStyle}  exact to="/menu" ><a> <img src={menu} alt =""/> </a></NavLink></li>
      
      
        <li><NavLink style={NavLinkStyle}  to="/order" > <a><img src={orders} alt =""/></a> </NavLink></li>
     
     
        <li> <NavLink style={NavLinkStyle} to="/customer" ><a ><img src={customer} alt =""/></a> </NavLink></li>
     
      
        <li><NavLink style={NavLinkStyle}  to="/edit" ><a ><img src={package1} alt =""/></a></NavLink></li>
      
    
        <li><NavLink style={NavLinkStyle}  to="/coupon"><a><img src={coupon} alt =""/></a></NavLink></li>
      

     
        <li> <NavLink style={NavLinkStyle}  to="/employee" ><a className="btn" ><img src={employee} alt =""/></a>  </NavLink></li>
      
    </ul>
    </div>












        {/* <div className='top' id='top'>
     <ul>
        <li  ><a className="btn active" href='#'> <img src={menu} alt =""/> </a></li> 
        <li><a className="btn" href='#'><img src={orders} alt =""/></a></li>
        <li><a className="btn" href='#'><img src={customer} alt =""/></a></li>
        <li><a className="btn" href='#'><img src={package1} alt =""/></a></li>
        <li><a className="btn" href='#'><img src={coupon} alt =""/></a></li>
        <li><a className="btn" href='#'><img src={employee} alt =""/></a></li>
       
        
     </ul>
     </div>


     <div className='bottom'>
        <ul>
        <li><img src={setting} alt =""/></li>
        </ul>
     </div> */}
     <div className='bottom'>
        <ul>
        <NavLink style={NavLinkStyle} activeClassName="activeClass" to="/setting" className="tab">
        <li><a className="btn" ><img src={setting} alt =""/></a></li>
      </NavLink>
        </ul>
     </div>



    </div>
    </nav>
  )
}
