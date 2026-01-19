import { IconBookmark, IconClockHour3, IconHeart, IconMapPin, } from "@tabler/icons-react";
import { Avatar, Button, Divider, Text } from '@mantine/core';
import { Link } from "react-router-dom";


const TalentCard=(props:any)=>{
    return <div className="flex flex-col p-4 rounded-xl bg-mine-shaft-900  hover:shadow-[0_0_5px_1px_yellow]
    transition duration-300 ease-in-out w-96 gap-3 !shadow-bright-sun-400">
        <div className="flex justify-between ">
            <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-mine-shaft-800">
                    <Avatar  size="lg" src={`/${props.image}.png`} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-lg font-semibold ">{props.name}</div>
                    <div className="text-sm text-mine-shaft-300">{props.role}&bull;  {props.company} </div>
                </div>
            </div>
            <IconHeart className="cursor-pointer text-mine-shaft-300"/>
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
           
            <div>{props.skills}</div>
        </div>
            <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>{props.about}
            </Text>
             <Divider  size="xs"  color="yellow" />
  
        <div className="flex justify-between">
            <div className="font-semibold text-mine-shaft-200">
                {props.expectedCtc}
            </div>
            <div className="flex items-center gap-1 text-xs text-mine-shaft-400">
              <IconMapPin  className="w-5 h-5"  stroke={1.5}/>{props.location}
            </div>
        </div>
    <Divider  size="xs"  color="yellow" />
    <div className="flex [&>*]:w-1/2 [&>*]:p-1 ">
        <Link to="/talent-profile">
        <Button color="yellow"  variant="outline" fullWidth>Profile</Button>

        </Link>
        <div>
          <Button color="yellow" variant="light" fullWidth>Meassage</Button>
          </div>


    </div>

    </div>
}
export default TalentCard;