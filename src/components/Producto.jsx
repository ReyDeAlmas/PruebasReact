import useQuiosko from "../hooks/useQuiosko"


export default function Producto( {producto}){

  const { handleClickAlert, handleSetProducto} = useQuiosko();

 
  const {nombre, precio, imagen, categoria_id, id} = producto

    return(
      <button 
      type="button"
      onClick={
        () =>
        {
          handleSetProducto(producto);
        }
      
      }
      className="w-full flex flex-col">

           <div 
            className="  relative group active:scale-95">

            <img 
                className=" group-hover:px-1    group-hover:py-1 group-hover:shadow-md transition-all duration-100"
                src={`img/${imagen}.jpg`}  
                alt={`Imagen de ${nombre}`} />

            <div 
            className= "px-1   cursor-pointer ">
                    <div
                    className=" text-white 2xl opacity-100 absolute py-3 flex flex-col  z-50 inset-0  justify-center items-center group-hover:justify-end    group-hover:text-black transition-all duration-500">
                       <p className="group-hover:bg-white group-hover:px-4 w-full text-center ">{nombre}</p>
                       <p className="group-hover:bg-white group-hover:font-bold font-semibold group-hover:px-4 w-full text-center  ">${precio.toFixed(2)}</p>
                    </div>
                    <div 
                    className="w-full bg-black opacity-40 absolute inset-0 group-hover:opacity-0 transition-all duration-300">

                    </div>
            </div>

           </div>

      </button>
    )
}
