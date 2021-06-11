import Link from 'next/link'
import React from 'react';
import { useSWRInfinite } from 'swr';
import fetcher from '@/lib/fetch';
import Skeleton from "react-loading-skeleton";

export default function SearchProduct({ query }) 
{
    const { data } = searchProduct(query);
    const product = data ? data.reduce((acc, val) => [...acc, ...val.product], []) : [];

    return (
        <>
            <hr />
            <div className="p-2">
                <b>Produk</b>
                <span style={{"float":"right","color":"grey","fontSize":"12px", "paddingTop":"2px"}}>{product.length} hasil</span>
            </div>
            <hr />
            {
                product ? (
                        
                        product.map((item) => 
                        <Product key={item._id} item={item}/>
                        )
                ) : <Skeleton />
            }
        </>
    )
}

export function searchProduct(query) {
    return useSWRInfinite(() => {
        return `/api/shop/product/search?q=${query}`;
    }, fetcher, {});
}

function Product({ item }) {
    return (
        <>
            <div style={
            {
                "textAlign": "center",
                "margin":"5px",
                "display":"inline-block",
                "width":"30%"
            }
            }>
            <Link href={"/product/"+ item.link}>
                <a style={
                {
                    "backgroundColor": "white",
                    "padding": "10px 15px",
                    "borderRadius": "5px",
                    "display": "block"
                }
                }>
                <div style={
                    {
                    "paddingTop": "4px"
                    }
                }>
                    <img src={ "/images/icon/" + item.sku + ".webp"} style={
                    {
                        "width": "50px"
                    }
                    } />
                </div>
                <div style={
                    {
                    "color": "#369bff",
                    "fontWeight": 500,
                    "fontSize": "12px",
                    "paddingTop": "5px"
                    }
                }>
                {item.name}
                </div>
                </a>
            </Link>
            </div>
        </>
    );
}