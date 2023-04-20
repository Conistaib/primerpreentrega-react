import React from "react";
import getList from "../../utils/getProducts";
import { useEffect } from "react";
import ItemList from "../ItemList";

const ItemListContainer = () => {
   
    const [arraylist, setArraylist] = useState([]);


   
   
   useEffect(()=> {
    getList()
     .then((response) => setArraylist(response))
     .catch((err) => console.error(err) )
     .finally()
   }, [])

    return(
        <div className="ListContainer">
            <ItemList products={arraylist} />

        </div>
    )
}

export default ItemListContainer;