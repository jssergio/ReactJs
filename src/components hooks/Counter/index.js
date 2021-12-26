import { useState } from "react";

function Counter() {
const [valor, newValor]= useState(0)

    return(
<>
<h1>{valor}</h1>
<button onClick={() =>newValor(valor + 1)}>Adicionar</button>
<button onClick={() =>newValor(valor - 1)}>Remover</button>

</>
    )
    
}
export default Counter;