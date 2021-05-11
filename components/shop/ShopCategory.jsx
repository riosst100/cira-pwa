import Link from 'next/link'
import React from 'react';
import { useSWRInfinite } from 'swr';
import fetcher from '@/lib/fetch';
import { serverURL } from '@/lib/core-data';
import Skeleton from "react-loading-skeleton";

export default function ShopCategory() {
    const {
        data, error, size, setSize,
    } = getCategory(100,1);

    const categories = data ? data.reduce((acc, val) => [...acc, ...val.categories], []) : [];
    const total_item = Math.ceil(categories.length/3);

    return (
        <>
            <table style={
            { 
                "margin": "0 auto",
                "borderCollapse": "separate",
                "borderSpacing": "10px",
                "width": "100%"
            }
            }>
                <tbody>
                    {[...Array(total_item)].map((e, i) => {
                    return (
                        <CategoryRow key={i} row={i} /> 
                    )
                    })}
                </tbody>
            </table>
        </>
    )
}

export function getCategory({limit, row}) {
    const from = (3*row)+1;

    return useSWRInfinite(() => {
        return `/api/shop/category?${
        limit ? `limit=${limit}` : ''}${
        from ? `&from=${from}` : ''
        }`;
    }, fetcher, {});
}

function CategoryRow({ row }) {
    const limit = 3;
    const {
      data, error, size, setSize,
    } = getCategory({ limit, row });
  
    const categories = data ? data.reduce((acc, val) => [...acc, ...val.categories], []) : [];
    return (
      <tr>
      {
        categories ? (
            categories.map((item) => 
            <Category key={item._id} item={item}/>
          )
        ) : <Skeleton />
      }
      </tr>
    )
  }

function Category({ item }) {
    return (
        <>
            <td style={
            {
                "textAlign": "center",
                "width": "30%"
            }
            }>
            <Link href={"/shop/"+ item.code}>
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
                    <img src={ serverURL + "/images/icon/" + item.code + ".webp"} style={
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
                {item.label}
                </div>
                </a>
            </Link>
            </td>
        </>
    );
}