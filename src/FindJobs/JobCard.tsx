import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Divider, Text } from '@mantine/core';


const JobCard=(props:any)=>{
    return <div className="flex flex-col gap-3 p-4 rounded-xl bg-mine-shaft-900 w-72 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
        <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-mine-shaft-800">
                    <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-xs text-mine-shaft-300">{props.company} &#x2022; {props.applicants}Applicantes</div>
                </div>
            </div>
            <IconBookmark className="cursor-pointer text-mine-shaft-300"/>
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
        </div>
        <div>
            <Text className="!text-xs text-justify text-mine" lineClamp={3}>{props.description} </Text>
 <Divider  size="xs" mx="md" color="yellow" />

        </div>
      
        
        <div className="flex justify-between"> 
            <div className="font-semibold text-mine-shaft-200">
                &#8377;{props.package}
            </div>
            <div className="flex items-center gap-1 text-xs text-mine-shaft-400">
              <IconClockHour3  className="w-5 h-5"  stroke={1.5}/>  {props.postedDaysAgo} days ago
            </div>
        </div>
    </div>
}
export default JobCard;