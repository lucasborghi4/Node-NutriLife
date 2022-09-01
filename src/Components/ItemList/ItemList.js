import React from "react"
import Item from "../Item/Item"
import "../Item/Item.css"



function ItemList ({products}) {
    return(
        <div className="ItemContainer">
        {products.map((product) => (
            <Item key={product.id} product={product} />
        ))}

        </div>
    )
}

export default ItemList