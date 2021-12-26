const NewButton = ({children,className,onClick}) => {
    return (
<>
<button 
  type="button" 
  className={className}
  onClick={onClick}>
  {/*Incrementar*/}
  {children} {/*Recebi o Texto do button*/}
  </button>
</>
    )
}
export default NewButton;