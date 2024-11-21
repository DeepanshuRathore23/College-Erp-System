import { useUser } from "../Context/UserContext"
import { Navigate } from "react-router-dom";
export default function Circulars (){
    const {user}  = useUser();
    if(!user){
        return <Navigate to ="/" />
    }
    return (
        <>
            <div className="">
                ciculars
            </div>
        </>
    )
}