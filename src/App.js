import Header from './components/Header/Header';
import logo from './logo.svg';
import Sidebar from './components/Sidebar/Sidebar';

import {Route,Routes} from 'react-router-dom';
import Food from './components/Food/Food';
import Menu from './components/Menu/Menu';
import Table from './components/Table/Table';
import ItemsSold from './components/ItemsSold/ItemsSold';
import Order from './components/Order/Order';
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
