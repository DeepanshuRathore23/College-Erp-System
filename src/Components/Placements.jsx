import { useUser } from "../Context/UserContext"
import { Navigate } from "react-router-dom";
export default function Placements (){
    const {user}  = useUser();
    if(!user){
        return <Navigate to ="/" />
    }
    return (
        <>
            <div className="">
                Placements
            </div>
        </>
    )
}