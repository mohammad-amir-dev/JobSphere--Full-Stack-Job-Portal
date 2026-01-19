import Marquee from "react-fast-marquee";
import {companies} from "../Data/data"

const Companies=()=>{
    return <div className="pb-5 mt-20">
        <div className="mb-10 text-4xl text-center text-semibold text-mine-shaft-100">Trusted by<span className="text-bright-sun-400">1000+</span>  Companies</div>
       <Marquee pauseOnHover={true}>
        {
            companies.map((company , index)=><div key={index} className="py-1 mx-8 cursor-pointer px2 hover:bg-mine-shaft-900 rounded-xl">
                <img className="h-14" src={`/Companies/${company}.png`} alt="company" />

            </div>)
        }
        
       </Marquee>
    </div>

}
export default Companies;