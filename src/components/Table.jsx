import React from 'react'
import './Table.css';
export default function Table() {
  return (
    <div className='outer1'>
    <div style={{fontWeight:600}}>Latest Order</div>
    <div className="inner">
       
      <table>
        
        <tr className='header'>
          
          <th>No.</th>
          <th>Item</th>
          <th>Quality</th>
          <th>Revenue</th>
          <th>Net Profit</th>
         </tr>

        
        <tr>
            <td>01</td>
            <td>Sashimi</td>
            <td>30</td>
            <td>$293.01</td>
            <td>$710.86</td>
        </tr>
        <tr>
            <td>02</td>
            <td>Unagi-Grilled Eel</td>
            <td>30</td>
            <td>$739.65</td>
            <td>$779.58</td>
        </tr>
        <tr>
            <td>03</td>
            <td>Soba-Buckwheat Noodles</td>
            <td>30</td>
            <td>$779.58</td>
            <td>$105.55</td>
        </tr>
        <tr>
            <td>04</td>
            <td>Onigiri-Rice Balls</td>
            <td>30</td>
            <td>$589.99</td>
            <td>$475.22</td>
        </tr>
        <tr>
            <td>05</td>
            <td>Sashimi</td>
            <td>30</td>
            <td>$406.27</td>
            <td>$767.50</td>
        </tr>
        <tr>
            <td>06</td>
            <td>Yakitori-Grilled Chicken</td>
            <td>30</td>
            <td>$396.84</td>
            <td>$948.55</td>
        </tr>
        <tr>
            <td>07</td>
            <td>Royal Milk Tea</td>
            <td>30</td>
            <td>$767.50</td>
            <td>$106.58</td>
        </tr>
        <tr>
            <td>08</td>
            <td>Flavored Soymilk Drinks</td>
            <td>30</td>
            <td>$778.35</td>
            <td>$778.35</td>
        </tr>
       
       
       
        
      </table>
    </div>



    </div>
  )
}
