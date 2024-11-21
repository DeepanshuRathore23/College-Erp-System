import { useUser } from "../Context/UserContext"
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