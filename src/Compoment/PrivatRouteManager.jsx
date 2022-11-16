import {Navigate,Outlet} from 'react-router-dom'

const privatRouteManager=()=>{
    return(
        
        (localStorage.getItem("RoleUser")=="Manager") ? <Outlet/> : <Navigate to='/users'/>
    )
}
export default privatRouteManager