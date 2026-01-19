import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";

const Profile =(props:any)=>{
    return <div className="w-3/4 ">
        <div className="relative">
            <img className="rounded-2xl" src="/Profile/banner.jpg" alt="" />
            <img className="absolute w-48 h-48 border-8 rounded-full border-mine-shaft-950 -bottom-1/3 left-3" src="avatar.png" alt="" />
            </div>
            <div className="px-3 mt-16">
                <div className="flex justify-between text-3xl font-semibold">{props.name}<Button color="yellow"  variant="outline" >Message</Button>
                </div>
                <div className="flex items-center gap-1 text-lg"> <IconBriefcase/>{props.role} &bull; {props.company}</div>
                 <div className="flex items-center gap-1 text-xs text-mine-shaft-300">
              <IconMapPin  className="w-5 h-5"  stroke={1.5}/>{props.location}
            </div>
                 </div>
             <Divider size="xs" mx="xs" my="xl" />
             <div className="px-3 ">
                <div className="mb-3 text-2xl font-semibold">About</div>
                <div className="text-sm text-justify text-mine-shaft-300 ">
                   { props.about}
                </div>
             </div>
              <Divider mx="xs"  my="xl" />

              <div className="px-3">
                <div className="mb-3 text-2xl font-semibold">Skills</div>
                <div className="flex flex-wrap gap-2">
                    {
                        props.skills.map((skill:any , index:any)=><div key={index} className="px-3 py-2 text-lg font-semibold rounded-3xl bg-bright-sun-300 bg-opacity-15 text-bright-sun-400">{skill}</div>)

                    }
                 </div>
             </div>
             <Divider mx="xs"  my="xl" />
              <div className="px-3 ">
                <div className="mb-5 text-2xl font-semibold">Experience</div>
                <div className="flex flex-col gap-8">        
                    {
                    props.experience.map((exp:any , index:any)=>
                <ExpCard key={index} {...exp}/>)
                 }
                    
                </div>
                
                </div>
                 <Divider mx="xs"  my="xl" />
              <div className="px-3">
                <div className="mb-5 text-2xl font-semibold">Certifications</div>
                {
                     
                    props.certifications.map((certi:any , index:any)=>
                <CertiCard key={index} {...certi}/>)
                   
                }
                
                
                </div>

                 
            
        </div>

    
}
export default Profile;