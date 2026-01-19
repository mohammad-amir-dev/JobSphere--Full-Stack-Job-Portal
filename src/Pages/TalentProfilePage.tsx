import { Button, Divider } from "@mantine/core";
import { IconSquareArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommondTalent from "../TalentProfile/RecommondTalent";


const TaletProfilePage=()=>{
    return<div className="min-h-[100vh] bg-mine-shaft-950  font-['exo2'] p-4">
        <Divider size="xs"  />
        <Link className="inline-block my-4"     to="/find-talent">
                <Button leftSection={<IconSquareArrowLeft size={20}/>} color="yellow"  variant="light" >Back</Button>
        </Link>
        
        <div className="flex gap-5">
            <Profile {...profile}/>
            <RecommondTalent/>
            
        </div>
        

        
        

    </div>
}
export default TaletProfilePage; 