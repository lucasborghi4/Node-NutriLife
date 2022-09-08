import React from "react"
import ItemCard from "../ItemCard/ItemCard";
import "../ItemDetailContainer/ItemDetailContainer"

function ItemDetail ({product}) {
    console.log(product)
    return(
        <div className="ItemContainer">
        
            <ItemCard key={product.id} product={product} />

        </div>
    )
}

export default ItemDetail;
