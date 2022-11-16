import {Navigate,Outlet} from 'react-router-dom'

const PrivatRoutes=()=>{
    let checkuseree=localStorage.getItem("checkuseree")
    return(
        
        checkuseree? <Outlet/>:<Navigate to='/login'/>
    )
}
export default PrivatRoutes