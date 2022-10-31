import Button from "./Button";
import { useState } from "react";
const Notifaction=(props)=>{
    const {text}=props
    const ShowNotf=(e)=>{
        // alert("hhhhhhhhh")
        // e.preventDefault();
        setShown(!shown) 

      }
    // console.log(useState)

    const [shown, setShown]=useState(false)
    const title=shown ? "X" : "show"
    return(
        <div className="notification" >
            <Button title={title} onClick={ShowNotf} />
            {
                shown
                &&
                <p className="notifaction-text">{text}</p>

            }

        </div>
    );

};
export default Notifaction