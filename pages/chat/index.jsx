import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '@/components/layout'
import PageBanner from '@/components/pageBanner'

export default function Chat() {
    const router = useRouter();
    return (
        <Layout title="Pesan">
            <div className="section" style={
                {
                    "color":"#27173E",
                    "cursor": "pointer",
                    "marginTop": "15px"
                }
            }>
                <Link href="/chat/1">
                    <a>
                        <div className="content">
                            <img src="https://brebes-social.id/images/logo/cira-blue-transparent.webp" alt="image" className="imaged" style={
                                {
                                    "width": "40px",
                                    "position": "absolute"
                                }
                            }
                            />
                            <div style={{ "paddingRight": "5px"}}>
                            <div style={{ "marginLeft": "50px", "fontWeight":"500" }}>Cira <span className="badge badge-danger" style={{ "float":"right", "fontSize":"10px", "height":"18px" }}>99+</span></div>
                            <div style={{ "marginLeft": "50px", "color": "grey", "fontSize":"12px" }}>Selamat datang di Cira App kak Rio.. <span style={{ "float":"right", "fontSize":"10px", "paddingTop":"5px" }}>19:20</span></div>
                            </div>
                        </div>
                    </a>
                </Link>
            </div>
        </Layout>
    )
}
