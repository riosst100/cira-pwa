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
                    <div className="mt-1">
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
                <div className="mt-1 mb-1 content p-2">
                    <table>
                        <tbody>
                            <tr>
                                <td><img src="https://static.wixstatic.com/media/51edce_e5e2b360b93b428484819d7e756b2365~mv2.gif" style={{"width": "80px"}} /></td>
                                <td><b>Beralih Jadi Partner</b>
                    <div style={{"fontSize":"12px"}}>Kamu bisa membuat toko online, jasa travel dan lainnya.</div>
                    <div className="mt-2"><Link href="/partner/register"><button className="btn bg-primary">Daftar Jadi Partner</button></Link></div></td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                <div className="mt-1">
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