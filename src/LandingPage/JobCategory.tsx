import { Carousel } from '@mantine/carousel';
import { jobCategory } from '../Data/data';
import { Category } from 'tabler-icons-react';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';


const JobCategory =()=>{
    return     <div className="pb-5 mt-20">
        <div className="mb-3 text-4xl text-center text-semibold text-mine-shaft-100">Browse <span className="text-bright-sun-400">Job</span> Category</div>
        <div className="mx-auto mb-10 text-lg text-center text-mine-shaft-300">Explore job oppertunities tailored to your career journey today!</div>
        <Carousel slideSize="22%"  slideGap="md" controlsOffset="md" controlSize={24}  withControls
      withIndicators={false} className='focus-visible:[$_button]:!outline-none [&_button]:!bg-bright-sun-400 [&_button]:!border-none 
      [&_button]:hover:!opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100 '>
         nextControlIcon={<IconArrowRight className='w-8 h-8' />}
      previousControlIcon={<IconArrowLeft className='w-8 h-8' />}
        {
            jobCategory.map((category , index)=><Carousel.Slide>
                <div className="flex flex-col items-center w-64 gap-2 p-5 border border-bright-sun-400 
                rounded-xl hover:cursor-pointer my-5 transition duration-300 ease-in-out !shadow-bright-sun-300 hover:shadow-orange-500" >
   <div className="p-2 rounded-full bg-bright-sun-300">
    <img className="w-8 h-8"  src={`/Category/${category.name}.png`} alt={category.name} />
   </div>
<div className="font-lg semibold text- text-mine-shaft-100">{category.name}</div>
<div className="text-sm text-center text-mine-shaft-300">{category.desc}</div>
<div className="text-lg text-bright-sun-200">{category.jobs}k+ new job posted</div>
</div>


            </Carousel.Slide>)
        }  
        
       
    </Carousel>

    </div>
} 
export default JobCategory; 