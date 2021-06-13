import Link from 'next/link'
import React from 'react';
import { useSWRInfinite } from 'swr';
import fetcher from '@/lib/fetch';
import Skeleton from "react-loading-skeleton";

export default function StoreListing() {
    const {
        data, error, size, setSize,
    } = getStore();

    const stores = data ? data.reduce((acc, val) => [...acc, ...val.stores], []) : [];

    return (
        <>
            <div style={{"marginTop": "10px"}}>
                {
                    stores ? (
                        stores.map((item) => 
                            <Category key={item._id} item={item}/>
                        )
                    ) : <Skeleton />
                }
            </div>
        </>
    )
}

export function getStore() {
    return useSWRInfinite(() => {
        return `/api/shop/store`;
    }, fetcher, {});
}

function Category({ item }) {
    return (
            <Link href={"/"+ item._id}>
                <a style={
                {
                    "backgroundColor": "white",
                    "borderRadius": "5px",
                    "display": "block",
                    "marginBottom":"15px"
                }
                }>
                    <div className="content">
                        <div style={{"padding":"10px 5px 5px"}}>
                            <img src="/images/logo/cira-blue-transparent.webp" alt="image" className="imaged" style={
                                {
                                    "width": "40px",
                                    "position": "absolute"
                                }
                            }
                            />
                            <div style={{ "paddingRight": "5px"}}>
                                <div style={{ "marginLeft": "50px", "fontWeight":"500" }}>{item.name} <StoreStatus code={item.status} /></div>
                                <div style={{ "marginLeft": "50px", "color": "grey", "fontSize":"12px" }}>{item.desa && 'Desa ' + item.desa}{item.desa && item.kecamatan ? ', ' : 'Alamat tidak diketahui'} {item.kecamatan && 'Kec. '+item.kecamatan}</div>
                            </div>
                            <div style={{"padding":"2px", "marginTop":"6px"}}><hr /></div>
                            <div style={{"padding":"5px"}}>{item.bio}</div>
                        </div>
                        <div>
                            <img src="http://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/040/307/medium/japanese-supermarket-p70745807_M_%281%29.jpg?2021" style={{"height":"200px","width":"100%","objectFit":"cover"}} />
                        </div>
                        <div style={{"padding":"8px"}}>
                            <table style={{
                                "width":"100%",
                                "textAlign":"center"
                            }}>
                                <tbody>
                                    <tr>
                                        <td style={
                                            {
                                                "backgroundColor": "rgb(0, 202, 0)"
                                            }
                                        }>
                                            <Link href={"/store/"+item.code}>
                                                <a className="bg" style={
                                                    {
                                                        "padding": "8px",
                                                        "color": "white",
                                                        "display":"block"
                                                    }
                                                }>Masuk ke Toko</a>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </a>
            </Link>
    );
}

export function StoreStatus({code}) {
    const status = code == 1 ? "Buka" : "Tutup";
    const color = code == 1 ? "#00ca00" : "#979797";
    return (
        <span className="badge" style={
            { "float":"right", "fontSize":"10px", "height":"18px", "color":"white","backgroundColor":color }
        }>{status}</span>
    )
}