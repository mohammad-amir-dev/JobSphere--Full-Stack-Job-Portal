import { TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { Avatar } from '@mantine/core';


const DreamJob= ()=>{
    return <div className="flex items-center px-20">
        <div className="flex-col w-[45%] gap-3">
            <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
                Find your<span>dream</span>  <span>job</span> with us </div>
            <div className="text-lg text-mine-shaft-200">Good life begins with a good company. Start explore thousands of jobs in one place.</div>
            <div className='flex gap-3 mt-5'>
                 <TextInput className="p-1 px-2 rounded-lg bg-mine-shaft-900 text-mine-shaft-100 [&_input]:text-mine-shaft-100" variant="unstyled" label="Job Title"  placeholder="Software Engineer" />
                 <TextInput className='p-1 px-2 rounded-lg bg-mine-shaft-900 text-mine-shaft-100[&_input] text-mine-shaft-100'  variant="unstyled" label="Job Type" placeholder="Full Time" />
                 <div className='flex items-center justify-center w-20 h-full p-2 rounded-lg cursor-pointer bg-bright-sun-400 text-mine-shaft-100 hover:bg-bright-sun-500'>
                   < IconSearch className='h-[85%]  w-[85%]'/>
                    
                 </div>
    
            </div>

        </div>
        <div className="w-[55%] flex items-center justify-center ">
            <div className="w-[40rem] relative ">
                <img src="\images\Boy.png"  alt="boy "/>
                <div className='absolute -right-10 p-2 border rounded-lg border-bright-sun-400 w-fit top-[50%] backdrop-blur-md  '>
                    <div className='mb-1 text-sm text-center text-mine-shaft-100 '>10K+got job</div>
                    <Avatar.Group>
      <Avatar src="\avatar\avatar-7.png" />
      <Avatar src="\avatar\avatar-8.png" />
      <Avatar src="\avatar\avatar-9.png" />
      <Avatar>+9k</Avatar>
    </Avatar.Group>
                </div> 
                <div className='absolute -left-10 p-2 border rounded-lg border-bright-sun-400 w-fit top-[28%] backdrop-blur-md  '>
                
                    <div className='flex items-center gap-2 '>
                        <div className='w-10 h-10 p-1 rounded-lg bg-mine-shaft-900'> 
                            <img src='\icons\Google.png' alt='' />
                        </div>
                        <div className='text-sm text-mine-shaft-100'>
                            <div> Software Engineer</div>
                            <div className='text-xs text-mine-shaft-200'>Nwe York</div>
                        </div>
                    </div>
                    <div className='flex gap-2 text-mine-shaft-200'>
                        <span>1 day ago</span>
                        <span>120 Applicants</span>
                    </div>
                    
                    </div>    
            </div>  

        </div>
    </div>

}
export default DreamJob;