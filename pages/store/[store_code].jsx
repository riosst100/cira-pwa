import React from 'react';
import Layout from '@/components/layoutSub'
import Link from 'next/link'
import { extractStore } from '@/lib/api-helpers';
import { findStoreByCode } from '@/db/index';
import { all } from '@/middlewares/index';

export default function Store({store}) {
  if (!store) return <Error statusCode={404} />;
  const {
    code
  } = store || {};
  console.log(store)
  return (
    <Layout title="Toko">
      <div className="content">
                        <div style={{"padding":"10px 5px 5px"}}>
                            <img src="https://brebes-social.id/images/logo/cira-blue-transparent.webp" alt="image" className="imaged" style={
                                {
                                    "width": "40px",
                                    "position": "absolute"
                                }
                            }
                            />
                            <div style={{ "paddingRight": "5px"}}>
                                <div style={{ "marginLeft": "50px", "fontWeight":"500" }}>{store.name} <StoreStatus code={store.status} /></div>
                                <div style={{ "marginLeft": "50px", "color": "grey", "fontSize":"12px" }}>{store.desa && 'Desa ' + store.desa}{store.desa && store.kecamatan ? ', ' : 'Alamat tidak diketahui'} {store.kecamatan && 'Kec. '+store.kecamatan}</div>
                            </div>
                            <div style={{"padding":"2px", "marginTop":"6px"}}><hr /></div>
                            <div style={{"padding":"5px"}}>{store.bio}</div>
                        </div>
                        <div>
                            <img src="http://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/040/307/medium/japanese-supermarket-p70745807_M_%281%29.jpg?2021" style={{"height":"200px","width":"100%","objectFit":"cover"}} />
                        </div>
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
                                        <Link href={"/store/"+store.code}>
                                            <a style={
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
    </Layout>
  );
};

export async function getServerSideProps(context) {
    await all.run(context.req, context.res);
    const store = extractStore(await findStoreByCode(context.req.db, context.params.store_code));
    if (!store) context.res.statusCode = 404;
    console.log(store)
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