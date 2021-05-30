import Layout from '@/components/layoutSub'
import { useRouter } from "next/router";

export default function SearchIndex() {
    const preventDefault = f => e => {
        e.preventDefault()
        f(e)
    }
    const router = useRouter()
    const handleSubmit = preventDefault((e) => {
        const query = e.currentTarget.query.value;
        router.push({
          pathname: '/search/result',
          query: {q: query},
        })
    })
    return (
        <Layout title="Pencarian">
            <div className="p-2">
                <form onSubmit={handleSubmit}> 
                    <input type="text" name="query" />
                    <button className="btn bg-primary">Cari</button>
                </form>
            </div>
        </Layout>
    )
}