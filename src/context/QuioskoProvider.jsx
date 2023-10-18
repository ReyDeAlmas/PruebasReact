import { createContext, useState } from "react"
import { categorias as categoriasDB } from "../data/Categorias";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ModalProducto from "../components/ModalProducto";

const QuioskoContext = createContext();


const QuioskoProvider = ( {children} ) => {

    const [ categorias, setCategorias ] = useState( categoriasDB );
    const [ categoriaActual, setCategoriaActual ] = useState( categorias[0] );
    const [modal, setModal] = useState(false);
    const [producto , setProducto] = useState({});

    const MySwal = withReactContent(Swal)

    const handleClickCategoria = id =>{
       const categoria = categorias.filter( categoria => categoria.id === id)[0];
       setCategoriaActual( categoria);
      
    
    }

  

    const handleClickAlert = producto => {

        MySwal.fire({
            showConfirmButton: false,
            html: 
            <ModalProducto
                key={producto.imagen}
                producto={producto}
                MySwal={MySwal}
            >
               
            </ModalProducto>
           ,
             width: '70vw',
             customClass: 'modal-max-width-500',
             
             
          })
          

       
    }

    const handleSetProducto = producto => {
      
        setProducto(producto);
        handleClickAlert(producto);
        
       
    }



    const handleClickModal = () => {
        setModal(!modal);
    }

    return (
        <QuioskoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                handleClickAlert,
                handleSetProducto,
                producto,
            }}
        >
         {children}
        </QuioskoContext.Provider>
    )
}

export {
    QuioskoProvider
}

export default QuioskoContext