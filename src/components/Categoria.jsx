import useQuiosko from "../hooks/useQuiosko";

export default function Categoria( {categoria} ) {

    const {handleClickCategoria, categoriaActual} = useQuiosko();
    const {icono, id, nombre} = categoria

    function setColor(){
       return categoriaActual.id === id ? "bg-amber-400 font-bold" : "bg-white";
    }

    return (
    <button
    type="button"
    onClick={ () => handleClickCategoria(id)} 
    className={`w-full flex gap-4 py-2 border hover:bg-amber-400 active:bg-amber-500 cursor-pointer px-4 items-center transition-all duration-100 ${setColor()}`}>
        <img 
        className="w-12" 
        src={`img/icono_${icono}.svg`} 
        alt="icono" />
        <p className="  truncate tracking-wide">
            {nombre}
        </p>
    </button>
      
    ); 
}