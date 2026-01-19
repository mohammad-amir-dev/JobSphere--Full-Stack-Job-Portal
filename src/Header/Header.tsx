
import { IconAnchor } from '@tabler/icons-react';
import { IconBell } from '@tabler/icons-react';
import { IconSettings } from '@tabler/icons-react';
import { Avatar, NavLink } from '@mantine/core';
import { Indicator } from '@mantine/core';
import NavLinks from './NavLinks';




const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-20 px-6 text-white bg-mine-shaft-950 font-['exo2']">
      <div className='flex items-center gap-3 text-bright-sun-400'>
        <IconAnchor className='w-10 h-10 stroke={1.25}'/>
        <div className='text-3xl font-semibold '>JobHook</div>
      </div>
     {NavLinks()}
      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-2'><div>AMIR</div>       <Avatar src="avatar.png" alt="it's me" />
</div>
<div  className='bg-mine-shaft-900 p-1.5 rounded-full'>
  <IconSettings stroke={1.5}/>
 </div>
        <div  className='bg-mine-shaft-900 p-1.5 rounded-full'>
              <Indicator color="brightSun.5"  offset={ 7} size={9} processing>

          <IconBell stroke={1.5}/>
          </Indicator>
          </div>


      </div>
      
    </div>
  );
};

export default Header;