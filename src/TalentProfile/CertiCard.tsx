const CertiCard=(props:any)=>{
    return <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-2">
                        <div className="p-2 rounded-md bg-mine-shaft-800">
                            <img className="h-7" src={`/Icons/${props.issuer}.png`} alt="" />
                        </div>
                        <div>
                            <div className="font-semibold">{props.name}</div>
                            <div className="text-sm text-mine-shaft-300">{props.issuer}</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="text-sm text-mine-shaft-300">{props.issueDate}</div>
                        <div className="text-sm text-mine-shaft-300"> ID:{props.certificatedId}</div>
                    </div>
                </div>
                
                

    

}
export  default CertiCard;
