import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

export default function Chat() {
    const router = useRouter();
    return (
        <Layout title="Cira App">
            <div id="appCapsule">
                <div className="section wallet-card-section pt-1">
                    <Link href="/chat/1">
                        <a>Masuk ke Ruang Chat</a>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}
