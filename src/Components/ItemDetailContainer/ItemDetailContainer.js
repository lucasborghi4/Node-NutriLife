import React, { useEffect, useState } from "react";
import "../ItemListContainer/ItemListContainer.css"
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";


const productList = [
    {id:"1","producto":"Arandanos","descripcion":"Bolsa de Arándanos congelados de 1kg","precio":1500,"image":"https://i.blogs.es/5d510d/arandanos/840_560.jpg","stock":882,"initial":0},
    {id:"2","producto":"Frambuesas","descripcion":"Bolsa de Frambuesas congeladas de 1kg","precio":2000,"image":"https://static4.abc.es/media/bienestar/2020/08/04/frambuesas-fichas-khKE--1200x630@abc.jpeg","stock":803,"initial":0},
    {id:"3","producto":"Moras","descripcion":"Bolsa de Moras congeladas de 1kg","precio":1600,"image":"https://static.misionesonline.news/wp-content/uploads/2019/10/Moras-m2iikn3tad00.jpg","stock":16,"initial":0},
    {id:"4","producto":"Frutillas", "descripcion":"Bolsa de Frutillas congeladas de 1kg","precio":1350,"image":"https://boletindesalud.com.ar/wp-content/uploads/2022/01/frutillas.jpg","stock":886,"initial":0},
    {id:"5","producto":"Mix", "descripcion":"Mix de Arándanos, Moras, Frambuesas y Frutillas congelados de 1kg","precio":1750,"image":"https://cdn.shopify.com/s/files/1/0211/4545/2608/products/mixcortadogde_1024x1024@2x.jpg?v=1611616510","stock":870,"initial":0}
];

function ItemDetailContainer() {

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    let { id } = useParams();
    console.log(id)

    useEffect (() => {
        const promise = new Promise((res, rej) => {

            setTimeout(() => {
                res(productList.find(producto => producto.id === id))
        }, 1000);
        });

        promise
        .then((res) => {
            setProduct(res);
            setLoading(true);
        })
        .catch((err) => console.log (err));

    }, [id] );

    return(
        <div className="itemContainer">
            {!loading ? (
                <div className="cargando"> Cargando... </div>
            ) : (
                <ItemDetail product={product}/>
            )}
        </div>
    );

}

export default ItemDetailContainer;