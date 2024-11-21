import { useUser } from "../Context/UserContext"
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