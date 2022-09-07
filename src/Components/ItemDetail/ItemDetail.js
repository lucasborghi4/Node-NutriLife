import React from "react"
import Item from "../Item/Item";
import "../ItemDetailContainer/ItemDetailContainer"

function ItemDetail ({producto}) {
            return(
                <div className="ItemContainer">
            
                    <Item key={producto.id} product={producto.producto} />
        
                </div>
            )
        }

export default ItemDetail;
