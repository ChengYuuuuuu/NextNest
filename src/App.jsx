import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PhoneFrame from './components/PhoneFrame';
import Explore from './pages/Explore';
import ProductDetail from './pages/ProductDetail';
import Sell from './pages/Sell';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import SellForm from './pages/SellForm';

export default function App(){
  const [accommodation,setAccommodation]=useState(()=>localStorage.getItem('campusloop-accommodation')||'Kemp Porter Buildings');
  useEffect(()=>localStorage.setItem('campusloop-accommodation',accommodation),[accommodation]);
  return <PhoneFrame><Routes>
    <Route path="/" element={<Navigate to="/explore" replace/>}/>
    <Route path="/explore" element={<Explore accommodation={accommodation} setAccommodation={setAccommodation}/>}/>
    <Route path="/product/:id" element={<ProductDetail accommodation={accommodation}/>}/>
    <Route path="/checkout/:id" element={<Checkout accommodation={accommodation}/>}/>
    <Route path="/sell" element={<Sell/>}/><Route path="/sell/new" element={<SellForm/>}/>
    <Route path="/orders" element={<Orders/>}/><Route path="/profile" element={<Profile accommodation={accommodation}/>}/>
    <Route path="*" element={<Navigate to="/explore" replace/>}/>
  </Routes></PhoneFrame>
}
