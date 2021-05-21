import Layout from '@/components/layout'
import { useCurrentUser } from '@/hooks/index';
import { useRouter } from 'next/router'
import NProgress from '@/components/nprogress'
import { ExitOutline, HelpCircleOutline , SettingsOutline, BagHandleOutline } from 'react-ionicons'
import Link from 'next/link'

export default function Menu() {
    const router = useRouter();
    const [user, { mutate }] = useCurrentUser();
    const handleLogout = async () => {
        // Start progress bar
        NProgress.start();

        await fetch('/api/auth', {
        method: 'DELETE',
        });
        mutate(null);
        
        router.push('/');
    };
    return (
        <Layout title="Cira App">
            {!user ? (
                <>
                    <div style={{ "marginTop": "5px" }}>
                            <Link href="/help">
                                <a className="p-3 block" style={{"backgroundColor":"white","color":"#27173E",
                                "cursor": "pointer"}}>
                                    <HelpCircleOutline
                                        color={'#27173E'} 
                                        height="22px"
                                        width="22px"
                                    /> <span style={{ "marginLeft": "5px" }}>Bantuan</span>
                                </a>
                            </Link>
                    </div>
                </>
            ) : (
              <>
                <div style={{ "marginTop": "5px" }}>
                    <div className="section" style={
                        {
                            "color":"#27173E",
                            "cursor": "pointer"
                        }
                    }>
                        <div className="p-3" style={{"backgroundColor":"white"}}>
                            <BagHandleOutline
                                color={'#27173E'} 
                                height="22px"
                                width="22px"
                            /> <span style={{ "marginLeft": "5px" }}>Pesanan Saya</span>
                        </div>
                    </div>
                    <hr />
                    <div className="section" style={
                        {
                            "color":"#27173E",
                            "cursor": "pointer"
                        }
                    }>
                        <div className="p-3" style={{"backgroundColor":"white"}}>
                            <SettingsOutline
                                color={'#27173E'} 
                                height="22px"
                                width="22px"
                            /> <span style={{ "marginLeft": "5px" }}>Pengaturan</span>
                        </div>
                    </div>
                    <hr />
                    <div className="section" style={
                        {
                            "color":"#27173E",
                            "cursor": "pointer"
                        }
                    }>
                        <div className="p-3" style={{"backgroundColor":"white"}}>
                            <HelpCircleOutline
                                color={'#27173E'} 
                                height="22px"
                                width="22px"
                            /> <span style={{ "marginLeft": "5px" }}>Bantuan</span>
                        </div>
                    </div>
                    <hr />
                    <div onClick={handleLogout} className="section" style={
                        {
                            "color":"#27173E",
                            "cursor": "pointer"
                        }
                    }>
                        <div className="p-3" style={{"backgroundColor":"white"}}>
                            <ExitOutline
                                color={'#27173E'} 
                                height="22px"
                                width="22px"
                            /> <span style={{ "marginLeft": "5px" }}>Keluar</span>
                        </div>
                    </div>
                </div>
              </>
            )}
        </Layout>
    )
}