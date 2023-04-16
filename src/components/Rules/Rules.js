import React,{useState} from "react";
import "./Rules.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Rules = () => {

    const [isactive,setIsActive] = useState(false)
    const switchActive = () =>{
        setIsActive(!isactive);
    }
    return(
        <div className="rules-container">
            <div className={isactive ? "on" : "off"}>
                <div id="rule-container">
                    <div id="rule-mini-container">
                        <h2 style={{color : "black"}}>RULES</h2>
                         <i className="fa-solid fa-xmark" onClick={switchActive}></i>
                         </div>
                        <div className="rule-img"></div>                
                    </div>
            </div>
            <button id="rules-btn" onClick={switchActive} >Rules</button>
        </div>
    )
}



export default Rules