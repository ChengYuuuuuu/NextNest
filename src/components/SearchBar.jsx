import {Search,X} from 'lucide-react';
export default function SearchBar({value,onChange}){return <label className="search-bar"><Search size={19}/><input value={value} onChange={e=>onChange(e.target.value)} placeholder="Search campus essentials"/>{value&&<button onClick={()=>onChange('')}><X size={17}/></button>}</label>}
