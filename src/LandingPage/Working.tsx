import { work } from "../Data/data";
import { Avatar } from '@mantine/core';


const Working=()=>{
    return  <div className="pb-5 mt-20">
            <div className="mb-3 text-4xl text-center text-semibold text-mine-shaft-100">How it <span className="text-bright-sun-400">Works</span></div>
            <div className="mx-auto mb-10 text-lg text-center text-mine-shaft-300">Effortlessly navigate through the process and land dream job.</div>
            <div className="flex items-center justify-between gap-5 px-16">
                <div className="relative">
                    <img  className="w-[30rem]" src="/Working/Girl.png" alt="girl" />
                    <div className="flex flex-col items-center gap-1 px-1 py-3 border rounded-xl right-0 border-bright-sun-400 backdrop-blur-md top-[15%] absolute">
                              <Avatar className="!h-16 !w-16" src="avatar1.png" alt="it's me" />
                              <div className="text-sm font-semibold text-center text-mine-shaft-200">Complete your profile</div>
                              <div className= "text-xs text-mine-shaft-300 ">70% Completed</div>
                              

                    </div>
                </div>
                <div className="flex flex-col gap-10 " >
                    {
                        work.map((item , index)=><div key={index} className="flex items-center gap-4">
                        <div className="rounded-full w-12 p-2.5  bg-bright-sun-300">
                            <img className="w-12 h-12" src={`/Working/${item.name}.png`} alt={item.name}/>
                        </div>
                              <div className="text-xl font-semibold text-mine-shaft-200">{item.name}</div>
                              <div>   </div>
                              <div className="text-mine-shaft-300">{item.desc}</div>
                              
                      </div>
                    
                    )
                    }
                    
                </div>
            </div>

    </div>

}
export default Working;