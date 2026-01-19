import { IconAnchor, IconBrandFacebook, IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import { footerLinks } from "../Data/data";

const Footer=()=>{
    return <div className="flex justify-around gap-5 pb-5 pt-20  bg-mine-shaft-950  font-['exo2']">
        <div className="flex flex-col w-1/4 gap-4">
        <div className='flex items-center gap-3 text-bright-sun-400'>
        <IconAnchor className='w-6 h-6 stroke={2.25}'/>
        <div className='text-xl font-semibold '>JobHook</div>
      </div>
      <div className="text-sm text-mine-shaft-300">Job portal with users profiles, skills, certifications, work experience and admin job postings. </div>
      <div className="flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2
       [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-700">
        <div><IconBrandFacebook/></div>
        <div><IconBrandInstagram/></div>
        <div><IconBrandX/></div>
      </div>
      </div>
      {
        footerLinks.map((item , index)=><div key={index} >
            <div  className="mb-4 text-lg font-semibold text-bright-sun-400">{item.title}</div>
            {
                  item.links.map((link,index)=><div key={index} className="mb-1 text-sm transition duration-300 ease-in-out cursor-pointer hover:translate-x-2 text-mine-shaft-300 hover:text-bright-sun-400">{link}</div>)
            }
            
        </div>)
        
      }

    </div>

}
export default Footer;