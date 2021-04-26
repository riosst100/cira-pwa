import Link from 'next/link'
import React from 'react';
import { useSWRInfinite } from 'swr';
import fetcher from '@/lib/fetch';
import { serverURL } from '@/lib/core-data';

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
              <img src={ serverURL + "/images/icon/" + item.code + ".png"} style={
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

export function getCategories() {
  return useSWRInfinite((index, previousPageData) => {
    // reached the end
    if (previousPageData && previousPageData.posts.length === 0) return null;

    // first page, previousPageData is null
    if (index === 0) {
      return `/api/dashboard-item?limit=3`;
    }

    // using oldest posts createdAt date as cursor
    // We want to fetch posts which has a datethat is
    // before (hence the .getTime() - 1) the last post's createdAt
    const from = new Date(
      new Date(
        previousPageData.posts[previousPageData.posts.length - 1].createdAt,
      ).getTime() - 1,
    ).toJSON();

    return `/api/dashboard-item?limit=3`;
  }, fetcher, {
    refreshInterval: 10000, // Refresh every 10 seconds
  });
}

export default function CategoryList() {

  const {
    data, error, size, setSize,
  } = getCategories();

  const dashboard_items = data ? data.reduce((acc, val) => [...acc, ...val.dashboard_items], []) : [];

  return (
    <table style={
      { 
        "margin": "0 auto",
        "borderCollapse": "separate",
        "borderSpacing": "10px",
        "width": "100%"
      }
    }>
      <tbody>
        <tr>
          {dashboard_items.map((item) => <DashboardItem key={item._id} item={item} />)}
        </tr>
      </tbody>
    </table>
  );
}