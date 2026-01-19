import { link } from "fs";
import { url } from "inspector";
import { Link, useLocation } from "react-router-dom";

const NavLinks=()=>{
    const links=[
        {name:"Find Job " , url:"find-jobs"},
        {name:"Find Talent" , url:"find-talent"},
        {name:"post Job" , url:"post-job"},
        {name:"About us" , url:"about"}
    ]
    const location=useLocation();
    return  <div className='flex items-center h-full gap-5 text-mine-shaft-300'>
        {
         
            links.map((link , index)=>
                 <div className={`${location.pathname=="/"+link.url?"border-bright-sun-400 text-bright-sun-400" :"border"}
            border-t-[3px] h-full flex items-center`}><Link key={index} to={link.url} >{link.name}</Link></div>)

        }          
        </div>
}
export default NavLinks;