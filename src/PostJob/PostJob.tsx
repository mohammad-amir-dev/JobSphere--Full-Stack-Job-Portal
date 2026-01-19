import { fields } from "../Data/PostJob";
import SelectInput from "./SelectInput";

const PostJob=()=>{
    const select=fields;
    return <div className="w-4/5 mx-auto">
        <div className="text-2xl font-semibold">Post a Job</div>
        <div>
            <div>
                <SelectInput {...select[0]}/>
                <SelectInput {...select[1]} />
            </div>
        </div>
         </div>

}
export default PostJob;