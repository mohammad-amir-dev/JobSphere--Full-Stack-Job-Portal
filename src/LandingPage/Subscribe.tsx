import { TextInput } from '@mantine/core';
import { Button } from '@mantine/core';


const Subscribe=()=>{
    return <div className="flex items-center justify-around py-3 mx-20 mt-20 rounded-xl bg-mine-shaft-900">
      <div className="w-2/5 text-4xl text-center text-semibold text-mine-shaft-100">Never Want to Miss Any <span className="text-bright-sun-400">Job News?</span></div>
<div className='flex gap-4 px-3 py-2 tems-center bg-mine-shaft-700 rounded-xl' >
    <TextInput className='[&_input]:text-mine-shaft-100 font-semibold'
    
      placeholder="Your@email.com"
      variant='unstyled'
      size='xl'
      />
          <Button size='lg' className="!rounded-lg " variant="filled " color='yellow' >Subscribe</Button>


</div>
    </div>
}
export default Subscribe;