import Link from 'next/link'
import React from 'react';
import { useSWRInfinite } from 'swr';
import fetcher from '@/lib/fetch';
import { serverURL } from '@/lib/core-data';
import Skeleton from "react-loading-skeleton";

export default function ProductList({ store_code }) {
    const { data } = getProduct();
    const product = data ? data.reduce((acc, val) => [...acc, ...val.product], []) : [];

    return (
        <>
            <div>
                <div style={{"textAlign":"center", "paddingTop":"5px"}}>
                    {
                        product ? (
                            product.map((item) => 
                            <Product key={item._id} item={item}/>
                        )
                        ) : <Skeleton />
                    }
                </div>
            </div>
        </>
    )
}

export function getProduct() {
    return useSWRInfinite(() => {
        return `/api/shop/product`;
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
                    <img src={ serverURL + "/images/icon/" + item.sku + ".webp"} style={
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