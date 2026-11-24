import {Search,Plus,Package,User} from 'lucide-react';
import {NavLink} from 'react-router-dom';
const tabs=[['/explore','Explore',Search],['/sell','Sell',Plus],['/orders','Orders',Package],['/profile','Profile',User]];
export default function BottomNavigation(){return <nav className="bottom-nav">{tabs.map(([to,label,Icon])=><NavLink key={to} to={to} className={({isActive})=>isActive?'active':''}><Icon size={21}/><span>{label}</span></NavLink>)}</nav>}
