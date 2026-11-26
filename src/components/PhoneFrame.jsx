import {useEffect,useState} from 'react';

function getPhoneScale(){
  if(typeof window==='undefined')return 1;
  if(window.innerWidth<=600)return 1;
  return Math.min(1,(window.innerHeight-20)/872,(window.innerWidth-20)/413);
}

export default function PhoneFrame({children}){
  const [scale,setScale]=useState(getPhoneScale);
  useEffect(()=>{
    const resize=()=>setScale(getPhoneScale());
    window.addEventListener('resize',resize);
    resize();
    return()=>window.removeEventListener('resize',resize);
  },[]);
  return <main className="desktop-stage"><section className="phone" style={{'--phone-scale':scale}}><div className="island"/><div className="screen">{children}</div></section></main>
}
