import Layout from '@/components/layoutSub'
import { useRouter } from "next/router";
import SearchMember from '@/components/Member';
import SearchProduct from '@/components/shop/Product'
import SearchStore from '@/components/shop/Store'

export default function SearchResult() {
    const { query } = useRouter();
    
    return (
        <Layout title="Hasil Pencarian">
            <div>
                <div className="p-2">Hasil Pencarian <b>{query.q}</b></div>
                <hr /><hr />
                <SearchMember query={query.q} />
                <SearchProduct query={query.q} />
                <SearchStore query={query.q} />
            </div>
        </Layout>
    )
}