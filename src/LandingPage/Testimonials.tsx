import { Avatar } from "@mantine/core";
import { Rating } from '@mantine/core';
import { testimonials } from "../Data/data";


const Testimonials=()=>{
    return  <div className="p-3 pb-5 mt-20 ">
        
        <div className="mb-3 text-xl text-center text-semibold text-mine-shaft-100">What <span className="text-bright-sun-400">user</span> says about us?</div>
        <div className="flex justify-evenly">
        {
            
           testimonials.map((data , index)=><div key={index} className="flex flex-col gap-3 w-[23%] border border-bright-sun-400  p-3 rounded-xl mt-10 ">
        <div className="flex items-center gap-2 ">
            <Avatar className="!h-14 !w-14"  src="avatar.png"  alt="it's  me" />
            <div>
                <div className="text-lg font-semibold text-mine-shaft-100">{data.name}</div>
                <div><Rating value={data.rating} fractions={2} readOnly /></div>
            </div>
        </div>
        <div className="text-xs text-mine-shaft-300">{data.testimonial}</div>
   </div> ) 
        }
   
        </div>
    </div>
}
export default Testimonials;  