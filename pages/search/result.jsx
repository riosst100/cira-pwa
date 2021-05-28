import Layout from '@/components/layoutSub'
import { useRouter } from "next/router";
import SearchMember from '@/components/Member';

export default function SearchResult() {
    const { query } = useRouter();
    return (
        <Layout title="Hasil Pencarian">
            <div>
                <div className="p-2">Hasil Pencarian <b>{query.q}</b></div>
                <hr /><hr />
                <SearchMember query={query.q} />
                <div className="p-2"><b>Produk</b><span style={{"float":"right","color":"grey","fontSize":"12px", "paddingTop":"2px"}}>100 hasil</span></div>
                <hr /><hr />
                <div className="p-2"><b>Toko</b><span style={{"float":"right","color":"grey","fontSize":"12px", "paddingTop":"2px"}}>100 hasil</span></div>
                <hr />
            </div>
        </Layout>
    )
}