import React from 'react';
import './Order.css';
import Table from './Table.jsx';
import ItemsSold from './ItemsSold.jsx';

export default function Order({props}) {
  return (
<div className='ordermaincontainer'> 
    
    <div className="Order-container">

      <ul>
        <li>
    <div className='main'>
      <div className='item1'>
        <ul>
        <li>
          <div className='ordercustomer'>
          Customer 
          </div>
          <div className='ordercount'>
            1000    
            </div>
          </li>
        </ul>
      </div>

      <div className='item2'>

      <ul>
        <li>
          <div className='arrow'>
          ↓
          </div>
          <div className='profit-percentage'>
              -15%   
            </div>
          </li>
        </ul>
      </div>
      </div></li>



      <li>
    <div className='main'>
      <div className='item1'>
        <ul>
        <li>
          <div className='ordercustomer'>
          Orders
          </div>
          <div className='ordercount'>
            1050    
            </div>
          </li>
        </ul>
      </div>

      <div className='item2'>

      <ul>
        <li>
          <div className='arrow' style={{color:'#42bda1'}}>
          ↑
          </div>
          <div className='profit-percentage' style={{color:'#42bda1'}}>
              +20%   
            </div>
          </li>
        </ul>
      </div>
      </div></li>






      <li>
    <div className='main'>
      <div className='item1'>
        <ul>
        <li>
          <div className='ordercustomer'>
          Revenue
          </div>
          <div className='ordercount'>
            $50.000    
            </div>
          </li>
        </ul>
      </div>

      <div className='item2'>

      <ul>
        <li>
          <div className='arrow' style={{color:'#42bda1'}} >
          ↑
          </div>
          <div className='profit-percentage'  style={{color:'#42bda1'}}>
              +10%   
            </div>
          </li>
        </ul>
      </div>
      </div></li>





      <li>
    <div className='main'>
      <div className='item1'>
        <ul>
        <li>
          <div className='ordercustomer'>
          Net Profit
          </div>
          <div className='ordercount'>
            $12.000   
            </div>
          </li>
        </ul>
      </div>

      <div className='item2'>

      <ul>
        <li>
          <div className='arrow'  style={{color:'#42bda1'}}>
          ↑
          </div>
          <div className='profit-percentage'  style={{color:'#42bda1'}}>
              +12%   
            </div>
          </li>
        </ul>
      </div>
      </div></li>




      </ul>

      </div>



    <div className='table-order-items'>
      <div>
      <Table/>
      </div>
      <div>
      <ItemsSold/>
      </div>
    


    </div>








      
     
      </div>











   

        
    
  )
}
