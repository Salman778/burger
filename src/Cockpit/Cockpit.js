import React, {useEffect} from 'react'
import './Cockpit.css'


const Cockpit = props => { 
    useEffect(()=>{
        alert("[Cockpit.js] useEffect")
    }, [])
    useEffect(()=>{
        console.log("[Cockpit.js] useEffect")
    })
    return(
        <div className="Cockpit">
            <button onClick={props.click}>Toggle</button>
        </div>
    )
    

}
export default Cockpit