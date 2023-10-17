import useQuiosko from "../hooks/useQuiosko";
import  Categoria from "../components/Categoria";

export default function Sidebar() {

    const { categorias } = useQuiosko();
    return (
        <div 
        className="mt-2">
            <div 
            className="w-full px-6">
                <img 
                src="/img/logo.svg" 
                alt="logo" />
            </div>
            <div 
            className=" mt-10">
                {categorias.map( categoria => (
                
                   <Categoria 
                    key={categoria.id}
                    categoria={categoria}
                  
                   />
            
                ))}
            </div>

            <div 
            className=" my-5 px-4 mx-1">
                    <button 
                    type="button"
                    className=" w-full shadow-md rounded-md px-4 py-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white uppercase font-semibold tracking-wider">
                            Cancelar
                    </button>
            </div>

        </div>
      
    ); 
}