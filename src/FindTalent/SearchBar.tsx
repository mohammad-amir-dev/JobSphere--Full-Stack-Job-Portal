import { Divider, Input, RangeSlider, Slider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";
import { useState } from "react";
import { searchFields } from "../Data/TalentData";
import MultiInput from "../FindJobs/MultiInput";
import { IconUser, IconUserCircle } from "@tabler/icons-react";

const SearchBar=()=>{
        const [value, setValue] = useState<[number,number]>([1,100]);
    
    return <div className="flex items-center px-5 py-8 !text-mine-shaft-100">
        <div className="flex items-center">
            <div className="p-1 mr-2 rounded-full text-bright-sun-400 bg-mine-shaft-900"><IconUserCircle size={20}/></div>
             <Input className="[&_input]:placeholder-mine-shaft-300" variant="unstyled" placeholder="Talent Name" />
        </div>
        {
            searchFields.map((item,index)=><><div key={index} className="w-1/5"><MultiInput {...item}/> </div>
                  <Divider mr="xs" size="xs" orientation="vertical" />
                  </>)
        }
        <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
        <div className="flex justify-between text-xs">
            <div>Salary</div>
            <div>&#8377;{value[0]} LPA-&#8377;{value[1]} LPA</div>

        </div>
        <RangeSlider  color="yellow" size="xs"  value={value}labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}   onChange={setValue} />
        </div>
            
    </div>

}
export default SearchBar ;  