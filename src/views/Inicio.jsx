import { productos as data } from "../data/Productos"
import Producto from "../components/Producto"
import useQuiosko from "../hooks/useQuiosko"

export default function Inicio(){

    const { categoriaActual } = useQuiosko();

    const productos = data.filter(producto => producto.categoria_id === categoriaActual.id);



    return(
        <div 
        className="pt-8 px-4 ">
            <h1 
            className=" font-extrabold uppercase text-5xl ">{categoriaActual.nombre}</h1>
            <p>Elige y personaliza tu pedido</p>

            <div
             className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
               {productos.map( producto => (
                   <Producto 
                    key={producto.imagen}
                    producto={producto}
                   />
                ))}
            </div>

           
            
        </div>
    )
}
