import { useContext } from "react";
import QuioskoContext from "../context/QuioskoProvider";

const  useQuiosko =  () => {
    return useContext(QuioskoContext)
}

export default useQuiosko