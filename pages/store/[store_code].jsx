import React from 'react';
import Layout from '@/components/layoutSub'
import { extractStore } from '@/lib/api-helpers';
import { findStoreByCode } from '@/db/index';
import { all } from '@/middlewares/index';
import ProductList from '@/components/shop/ProductList'

export default function Store({store}) {
  if (!store) return <Error statusCode={404} />;
  const { name, code } = store || {};
  return (
    <Layout title={ name } hideFooter="true" isShop="1">
        <div className="content mb-2">
            <div className="text-center p-3">
                <img src="https://brebes-social.id/images/logo/cira-blue-transparent.webp" className="imaged" style={
                    {
                        "width": "45px"
                    }
                } />
                <div style={
                    {
                        "fontWeight":"bold",
                        "fontSize":"16px"
                    }
                } className="pt-2">{store.name}</div>
            </div>
            <hr />
            <div style={{"padding":"10px"}}>
                <div>
                        <div style={{ "color": "grey", "fontSize":"12px" }}>{store.desa && 'Desa ' + store.desa}{store.desa && store.kecamatan ? ', ' : 'Alamat tidak diketahui'} {store.kecamatan && 'Kec. '+store.kecamatan}<StoreStatus code={store.status} /></div>
                    </div>
                    <div style={{"padding":"2px", "marginTop":"8px"}}><hr /></div>
                            <div style={{"padding":"5px", "fontSize":"12px"}}>{store.bio}</div>
                        </div>
                    </div>
        <hr /><hr />
        <div style={
            {
                "backgroundColor":"white",
                "padding":"10px",
                "fontWeight":"bold"
            }
        } >Produk Toko</div>
        <hr />
        <ProductList store_code={code} />
    </Layout>
  );
};

export async function getServerSideProps(context) {
    await all.run(context.req, context.res);
    const store = extractStore(await findStoreByCode(context.req.db, context.params.store_code));
    if (!store) context.res.statusCode = 404;
    return { props: { store } };
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