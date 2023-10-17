


export default function ModalProducto( {producto}){

  const {nombre, precio, imagen, categoria_id, id} = producto



    return(
      
        <div className=" w-full flex gap-1">
          <img 
            className="w-60"
            src={`/img/${imagen}.jpg`}  
            alt={`Imagen de ${nombre}`} 
          />
            <div className=" flex flex-col  justify-center items-center w-full">
             <h1>{nombre}</h1>
          
              <p className="w-full font-semibold text-center">
                ${precio.toFixed(2)}
              </p>
        </div>
        </div>


      
    )
}
