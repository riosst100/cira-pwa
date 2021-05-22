import Link from 'next/link'
import React from 'react';
import { useSWRInfinite } from 'swr';
import fetcher from '@/lib/fetch';
import { serverURL } from '@/lib/core-data';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function DashboardItem({ item }) {
  return (
    <>
      <td style={
        {
          "textAlign": "center",
          "width": "30%"
        }
      }>
        <Link href={"/"+ item.code}>
          <a style={
            {
              "backgroundColor": "#f1f2f6",
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
                "color": "rgb(91, 92, 96)",
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

export function getCategories({ limit, row }) {
  const from = (3*row)+1;
  return useSWRInfinite((index, previousPageData) => {
    // reached the end
    if (previousPageData && previousPageData.posts.length === 0) return null;

    // first page, previousPageData is null
    if (index === 0) {
      return `/api/dashboard-item?${
        limit ? `limit=${limit}` : ''}${
        from ? `&from=${from}` : ''
      }`;
    }

    return `/api/dashboard-item?${
      limit ? `limit=${limit}` : ''}${
      from ? `&from=${from}` : ''
    }`;
  }, fetcher, {});
}

function DashboardItemRow({ row }) {
  const limit = 3;
  const {
    data, error, size, setSize,
  } = getCategories({ limit, row });

  const dashboard_items = data ? data.reduce((acc, val) => [...acc, ...val.dashboard_items], []) : [];
  return (
    <tr>
    {
      dashboard_items ? (
        dashboard_items.map((item) => 
          <DashboardItem key={item._id} item={item}/>
        )
      ) : <Skeleton />
    }
    </tr>
  )
}

export default function CategoryList() 
{
  const { data } = getCategories(100,1);
  const dashboard_items = data ? data.reduce((acc, val) => [...acc, ...val.dashboard_items], []) : [];
  const total_item = Math.ceil(dashboard_items.length/3);

  const table = [...Array(total_item)].map((e, i) => {
          return (
            <DashboardItemRow key={i} row={i} /> 
          )
        });

  const skeleton = (
    <>
      <tr>
        <td><Skeleton height={100} /></td>
        <td><Skeleton height={100} /></td>
        <td><Skeleton height={100} /></td>
      </tr>
      <tr>
        <td><Skeleton height={100} /></td>
        <td><Skeleton height={100} /></td>
        <td><Skeleton height={100} /></td>
      </tr>
      <tr>
        <td><Skeleton height={100} /></td>
        <td><Skeleton height={100} /></td>
        <td><Skeleton height={100} /></td>
      </tr>
    </>
  );

  return (
    <SkeletonTheme color="#e5e5e5" highlightColor="#e9e9e9">
    <table style={
      { 
        "margin": "0 auto",
        "borderCollapse": "separate",
        "borderSpacing": "8px",
        "width": "100%",
        "backgroundColor":"white"
      }
    }>
      <tbody>
        {data ? table : skeleton}
      </tbody>
    </table>
    </SkeletonTheme>
  );
}