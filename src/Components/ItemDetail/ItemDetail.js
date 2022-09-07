import React from "react"
import Item from "../Item/Item";
import "../ItemDetailContainer/ItemDetailContainer"

function ItemDetail ({product}) {
    console.log(product)
    return(
        <div className="ItemContainer">
        
        <Item key={product.id} product={product} />

        </div>
    )
}

export default ItemDetail;
