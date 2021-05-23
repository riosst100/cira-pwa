import Layout from '@/components/layoutSub'
import Link from 'next/link'
import { findFeedById } from '@/db/index'
import { all } from '@/middlewares/index'
import { extractData } from '@/lib/api-helpers'
import Feed from '@/components/Feed'

export default function FeedView({ data }) 
{
    return (
        <Layout title="Postingan" hideFooter="yes">
            <Feed post={ data } />
            <hr />
            <form style={{"position":"fixed","bottom":0,"width":"100%"}}>
                <hr />
                <table style={{"width":"100%"}}>
                    <tbody>
                        <tr>
                            <td className="text-center" style={{"width":"75%"}}>
                                <textarea className="p-2 ml-1 mt-1" placeholder="Ketik komentar.." style={
                                    {
                                        "width": "100%"
                                    }
                                } rows="1"></textarea>
                            </td>
                            <td className="text-center" style={{"width":"25%"}}>
                                <button className="btn bg-primary">Kirim</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </Layout>
    )
}

export async function getServerSideProps(context) 
{
    await all.run(context.req, context.res);
    const data = extractData(await findFeedById(context.req.db, context.params.id));
    if (!data) context.res.statusCode = 404;
    
    return { props: { data } };
}
