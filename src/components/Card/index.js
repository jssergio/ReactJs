import { useState } from "react";
import NewButton from "../Button";
const Card = () =>{
const [valor, setValor] = useState(0)

function Add() {
    setValor(valor + 1)    
}
function Dim() {
    setValor(valor - 1)    
}
    return(
    <>
    <div className="card">
    <div className="card-header">
        Featured
    </div>
    <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
       {/* <button type="button" className="btn btn-success"
        onClick={Add}>Incrementar</button>*/}
    <NewButton className="btn btn-success" onClick={Add}> Incrementar </NewButton>
        {/*<button type="button" className="btn btn-danger" onClick={Dim}>Decrmentar</button>*/}
    <NewButton className="btn btn-danger" onClick={Dim}>Decrmentar </NewButton>
        <center><p>{valor}</p></center>
    </div>
    </div>
    
    </>

    )
}
export default Card;