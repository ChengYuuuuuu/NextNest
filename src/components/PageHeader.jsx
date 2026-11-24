import {ArrowLeft} from 'lucide-react';import {useNavigate} from 'react-router-dom';
export default function PageHeader({title,subtitle,back=false}){const nav=useNavigate();return <header className="page-header">{back&&<button className="icon-button" onClick={()=>nav(-1)}><ArrowLeft/></button>}<div><h1>{title}</h1>{subtitle&&<p>{subtitle}</p>}</div></header>}
