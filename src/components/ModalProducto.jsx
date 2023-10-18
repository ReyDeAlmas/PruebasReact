


export default function ModalProducto( {producto, MySwal}){

  const {nombre, precio, imagen, categoria_id, id} = producto



    return(
      
        <div className=" w-full flex gap-1">
          <img 
              className="w-80 rounded-md px-6 py-6 bg-slate-100 shadow-inner"
              src={`/img/${imagen}.jpg`}  
              alt={`Imagen de ${nombre}`} 
            />
              <div className=" flex flex-col  justify-between items-center w-full">

                  <div className="w-full flex gap-1 flex-wrap items-center  text-xl  justify-center mt-20"> 
                      
                    <h1 className="text-2xl text-black font-bold tracking-wide ">{nombre}</h1>

                 
                    <p className="text-center py-0.5 px-1 bg-yellow-400 font-bold rounded-lg text-yellow-800 ">
                        ${precio.toFixed(2)}
                      </p>
                  

                  </div>

                  <div
                  className="w-full flex justify-end my-3">
                    <button 
                    className=" self-end px-4 py-2 bg-blue-500 text-white font-semibold shadow-md rounded-md uppercase tracking-wide hover:bg-blue-600 active:bg-blue-700" 
                    type="button" 
                    onClick={() => MySwal.clickConfirm()} 
                    >Confirmar</button>
                  </div>

                  

              </div>
         
        </div>


      
    )
}
