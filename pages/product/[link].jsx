import React from 'react';
import Layout from '@/components/layoutSub'
import Link from 'next/link'
import { excludeField } from '@/lib/api-helpers';
import { findProductByLink } from '@/db/index';
import { all } from '@/middlewares/index';
import ProductList from '@/components/shop/ProductList'

export default function ProductDetail({product}) {
  if (!product) return <Error statusCode={404} />;
  const { name, description, price, store_code } = product || {};
  return (
    <Layout title="Detail Produk" hideFooter="true" isShop="1">
      <div style={{"backgroundColor":"white"}}>
        <img src="https://id-test-11.slatic.net/p/2ca1b94bf4b5f32f27ecacfd1f1ccd17.jpg_720x720q80.jpg_.webp" style={
          {
            "objectFit":"cover",
            "width": "100%",
            "height":"200px"
          }
        } />
        <div className="pl-3 pr-3 pt-2 pb-2" style={{"fontSize":"17px", "fontWeight":"bold"}}>{name}</div>
        <div className="pl-3 pr-3 pb-3 color-primary" style={{"fontWeight":"bold"}}>Rp. {price}</div>
      </div>
      <hr />
      <hr style={{"marginBottom":"5px"}} />
      <hr /><hr />
        <div style={
            {
                "backgroundColor":"white",
                "padding":"10px",
                "fontWeight":"bold"
            }
        } >Deskripsi Produk</div>
        <hr />
        <div style={
            {
                "backgroundColor":"white",
                "padding":"10px",
                "fontSize":"12px"
            }
        } >{description}</div>
        <hr style={{"marginBottom":"5px"}} />
      <hr /><hr />
        <div style={
            {
                "backgroundColor":"white",
                "padding":"10px",
                "fontWeight":"bold"
            }
        } >Penilaian Produk</div>
        <hr />
        <div style={
            {
                "backgroundColor":"white",
                "padding":"10px",
                "fontSize":"12px"
            }
        } >{description}</div>
        <hr style={{"marginBottom":"5px"}} />
      <hr /><hr />
        <div style={
            {
                "backgroundColor":"white",
                "padding":"10px",
                "fontWeight":"bold"
            }
        } >Produk Lain dari Toko ini</div>
        <hr />
        <ProductList store_code={store_code} />

        {/* Option */}
        <div style={
          {
            "position":"fixed",
            "backgroundColor":"white",
            "bottom": 0,
            "width": "100%"
          }
        }>
          <hr />
          <div style={
            {
              "textAlign":"center",
              "padding": "10px"
            }
          } >
            <button className="btn bg-primary p-2 pl-4 pr-4 mr-2" style={{"width":"35%"}}>Beli Sekarang</button>
            <button className="btn bg-primary p-2 pl-4 pr-4" style={{"width":"60%"}}>Tambahkan ke Keranjang</button>
          </div>
        </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
    await all.run(context.req, context.res);
    const product = excludeField(await findProductByLink(context.req.db, context.params.link));
    if (!product) context.res.statusCode = 404;
    return {
        props: { product }
    };
}