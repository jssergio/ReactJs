
const Item = (props) => {
    return ( <>
    <a href="#" className="list-group-item list-group-item-action">
   {/*{props.texto} forma Defaul de Inserir texto */} 
  
   {props.children}
    </a>
    </>)
}
export default Item;