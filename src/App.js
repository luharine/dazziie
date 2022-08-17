import Header from './components/Header';
import logo from './logo.svg';
import Sidebar from './components/Sidebar';

import {Route,Routes} from 'react-router-dom';
import Food from './components/Food';
import Menu from './components/Menu';
import Table from './components/Table';
import ItemsSold from './components/ItemsSold';
import Order from './components/Order';
import './App.css';




function App() {
  return (
    <div>
      <Header />
      <div  className='Sidebar'>
      <Sidebar/>
      <div className='Sidebar-child'>
       <Routes > 
        <Route path='/menu' element={<Menu/>} />
        <Route path='/order' element={<Order/>} />
         </Routes>
      
      </div>
      </div>

      
      
      
     
      
      
  
    </div>
  );
}

export default App;
