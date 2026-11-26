import lamp from '../assets/lamp.png';
import kettle from '../assets/kettle.png';
import basket from '../assets/basket.png';
import calculator from '../assets/calculator.png';
import monitor from '../assets/monitor.png';
import earphone from '../assets/earphone.png';
import mouse from '../assets/mouse.png';
import calculatorExpensive from '../assets/calculator_expensive.png';
import kindle from '../assets/kindle.png';
import ns from '../assets/ns.png';
import speaker from '../assets/speaker.png';
import ipad from '../assets/ipad.png';

export const products = [
  {id:1,name:'Minimal desk lamp',price:0,free:true,originalPrice:19,condition:'Safety check required',category:'Home',image:lamp,description:'Compact LED desk lamp for focused study without taking up valuable desk space.',dimensions:'42 cm tall'},
  {id:2,name:'Compact electric kettle',price:0,free:true,originalPrice:18,condition:'Tested and working',category:'Kitchen',image:kettle,description:'A compact one-litre kettle, cleaned and tested for student accommodation.',dimensions:'1 litre'},
  {id:3,name:'Woven laundry basket',price:0,free:true,originalPrice:14,condition:'Cleaned',category:'Home',image:basket,description:'Lightweight woven basket with handles, suitable for laundry or room storage.',dimensions:'40 × 35 × 48 cm'},
  {id:4,name:'Casio scientific calculator',price:0,free:true,originalPrice:17,condition:'Fully functional',category:'Other',image:calculator,description:'A dependable scientific calculator suitable for university coursework.',dimensions:'Pocket size'},
  {id:5,name:'Dell P2422H Monitor',price:45,originalPrice:169,condition:'Good',category:'Electronics',image:monitor,description:'23.8-inch Full HD IPS monitor, inspected and ready for a new study setup.',dimensions:'54 × 42 × 18 cm'},
  {id:6,name:'Sony WH-1000XM4 Headphones',price:85,originalPrice:249,condition:'Good',category:'Electronics',image:earphone,description:'Wireless noise-cancelling headphones with a compact folding design.',dimensions:'Foldable'},
  {id:7,name:'Logitech MX Master 3S Mouse',price:48,originalPrice:110,condition:'Good',category:'Electronics',image:mouse,description:'Quiet ergonomic wireless mouse ideal for long study and design sessions.',dimensions:'12.5 × 8.4 cm'},
  {id:8,name:'Casio fx-CG50 Calculator',price:62,originalPrice:119,condition:'Good',category:'Other',image:calculatorExpensive,description:'Colour graphing calculator with a protective case, tested and reset.',dimensions:'18.8 × 8.9 cm'},
  {id:9,name:'Kindle Paperwhite 11th Gen',price:55,originalPrice:139,condition:'Good',category:'Electronics',image:kindle,description:'Compact 6.8-inch e-reader with a clear display and long battery life.',dimensions:'17.5 × 12.5 cm'},
  {id:10,name:'Nintendo Switch Lite',price:95,originalPrice:199,condition:'Good',category:'Electronics',image:ns,description:'Portable handheld console, inspected and supplied ready for setup.',dimensions:'20.8 × 9.1 cm'},
  {id:11,name:'Bose SoundLink Flex Speaker',price:58,originalPrice:149,condition:'Good',category:'Electronics',image:speaker,description:'Portable Bluetooth speaker with a compact, dorm-friendly footprint.',dimensions:'20.1 × 9 cm'},
  {id:12,name:'Apple iPad 9th Gen · 64GB',price:145,originalPrice:319,condition:'Good',category:'Electronics',image:ipad,description:'10.2-inch Wi-Fi iPad, inspected, reset and ready for a new owner.',dimensions:'25.1 × 17.4 cm'},
];
