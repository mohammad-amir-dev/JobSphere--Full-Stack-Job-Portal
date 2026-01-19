import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const RecommondTalent=()=>{
    return <div>
        <div className="mb-5 text-xl font-semibold "> recommended Talent</div>
        <div className="flex flex-col flex-wrap gap-5">
            {talents.map((talent , index)=> index<4 &&<TalentCard key={index} {...talent} />)}
        </div>
    </div>

}
export default RecommondTalent;