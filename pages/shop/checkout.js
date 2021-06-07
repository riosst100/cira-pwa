import { useRouter } from 'next/router'
import Layout from '@/components/layoutSub'
import Link from 'next/link'
import React from 'react';
import { useSWRInfinite } from 'swr';
import fetcher from '@/lib/fetch';
import Skeleton from "react-loading-skeleton";
import { getStoreById } from '@/components/shop/Store'

export default function Chat() {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // // Start progress bar
        // NProgress.start();
    
        // const body = {
        //   phone: e.currentTarget.phone.value,
        //   name: e.currentTarget.full_name.value,
        //   call_name: e.currentTarget.call_name.value,
        //   birthdate: e.currentTarget.birthdate.value,
        //   password: e.currentTarget.password.value,
        //   kecamatan: e.currentTarget.kecamatan.value,
        //   desa: e.currentTarget.desa.value,
        // };
        // const res = await fetch('/api/users', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(body),
        // });
        // if (res.status === 201) {
        //   const userObj = await res.json();
        //   mutate(userObj);
        // } else {
        //   // Start progress bar
        //   NProgress.done();
    
        //   setErrorMsg(await res.text());
        // }
      };
      const member_id = "fXeJml-Kl9qQ";
    const { data } = getCarts(member_id);
    const carts = data ? data.reduce((acc, val) => [...acc, ...val.carts], []) : [];
    return (
        <Layout title="Checkout">
            <div>
                {
                    carts ? (
                        carts.map((cart) => 
                            <StoreGrouping key={cart._id} cart={cart} />
                        )
                    ) : <Skeleton />
                }
            </div>
            <div className="content mt-1 mb-1 p-2">
                <div>Total Harga Produk: <span style={{"color":"grey","fontSize":"12px","float":"right"}}>Rp. 4.000</span></div>
                <div>Total Biaya Pengiriman: <span style={{"color":"grey","fontSize":"12px","float":"right"}}>Rp. 4.000</span></div>
                <div>Total Harga Pesanan: <span style={{"color":"grey","fontSize":"12px","float":"right"}}>Rp. 8.000</span></div>
                <div className="step mb-2 mt-2">Harap cek kembali pesanan kamu sebelum buat pesanan, order fiktif akan dipidanakan.</div>
                <div className="text-center">
                    <form onSubmit={handleSubmit}>
                        <button className="btn bg-primary">Buat Pesanan</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

function StoreGrouping({cart}) {
    const { data } = getStoreById(cart.store_id);
    return data ? (
        <>
        {
            data.map((item) => (
                <div className="content mt-1 mb-1 p-2" key={cart.store_id}>
                    <div className="pb-2"><b>{item.store.name}</b><span style={{
                        "color": "gray",
                        "fontSize": "10px",
                        "float": "right"
                    }}></span></div>
                    <hr /><hr />
                    <div className="mt-2">
                            {
                                cart.product_ids.map((product_id) => 
                                    <ProductCart key={product_id} product_id={product_id} />
                                )
                            }
                    </div>
                    <div className="pb-2" style={{"fontSize":"12px","color":"grey"}}>Alamat Toko: Desa {item.store.desa}, Kec. {item.store.kecamatan}</div>
                    <hr />
                    <div className="content mt-1 mb-1 p-2">
                <div><b>Metode Pengiriman</b></div>
                <input type="radio" id="male" name="shipment" value="male" /> <label htmlFor="male">Cira Express<span style={{"color":"grey","fontSize":"12px","float":"right"}}>Rp. 2.000</span></label><br />
                <input type="radio" id="female" name="shipment" value="female" /> <label htmlFor="female">Kurir Toko<span style={{"color":"grey","fontSize":"12px","float":"right"}}>Rp. 2.000</span></label><br />
                <input type="radio" id="other" name="shipment" value="other" /> <label htmlFor="other">Ambil di Toko<span style={{"color":"grey","fontSize":"12px","float":"right"}}>Rp. 0</span></label>
            </div>
            <hr />
            <div className="content mt-1 mb-1 p-2">
                <div><b>Metode Pembayaran</b></div>
                <input type="radio" id="male" name="payment" value="male" /> <label htmlFor="male">COD</label><br />
                <input type="radio" id="female" name="payment" value="female" /> <label htmlFor="female">Bayar di Toko</label><br />
            </div>
                </div>
                )
            )
        }
        </>
    ) : <Skeleton />;
}

function ProductCart({product_id}) 
{
    const { data } = getProduct(product_id)
    return data ? (
        data.map((item) => 
            <Product key={item.product._id} item={item.product}/>
        )
    ) : <Skeleton />;
}

export function getProduct(product_id) {
    return useSWRInfinite(() => {
        return `/api/shop/product?id=${product_id}`;
    }, fetcher, {});
}

export function getCarts(member_id) {
    return useSWRInfinite(() => {
        return `/api/shop/cart?member_id=${member_id}`;
    }, fetcher, {});
}

function Product({ item }) {
    return (
        <>
        <div style={{"marginBottom":"10px"}}>
        <div style={{"position": "absolute"}}>
            <img src="https://media.allure.com/photos/602c0ac49bce5b70c6ce2f13/1:1/w_1000,h_1000,c_limit/Cocokind%20Sake%20Body%20Lotion.jpg" style={{"width":"80px"}} />
        </div>
        <div style={{"marginLeft": "85px","marginBottom": "48px"}}>
            <div className="pl-2"><b>{item.name}</b></div>
            <div className="pl-2" style={{"color":"grey"}}>Rp. {item.price}</div>
        </div>
        <hr />
        </div>
        </>
    );
}