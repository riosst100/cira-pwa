import Layout from '@/components/layout'
import { useCurrentUser } from '@/hooks/index';
import { useRouter } from 'next/router'
import NProgress from '@/components/nprogress'
import { ExitOutline, HelpCircleOutline , SettingsOutline, BagHandleOutline } from 'react-ionicons'

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
              </>
            ) : (
              <>
                <div style={{ "marginTop": "5px" }}>
                    <div className="section pt-1" style={
                        {
                            "color":"#27173E",
                            "cursor": "pointer"
                        }
                    }>
                        <div className="content">
                            <BagHandleOutline
                                color={'#27173E'} 
                                height="22px"
                                width="22px"
                            /> <span style={{ "margin-left": "5px" }}>Pesanan Saya</span>
                        </div>
                    </div>
                    <div className="section pt-1" style={
                        {
                            "color":"#27173E",
                            "cursor": "pointer"
                        }
                    }>
                        <div className="content">
                            <SettingsOutline
                                color={'#27173E'} 
                                height="22px"
                                width="22px"
                            /> <span style={{ "margin-left": "5px" }}>Pengaturan</span>
                        </div>
                    </div>
                    <div className="section pt-1" style={
                        {
                            "color":"#27173E",
                            "cursor": "pointer"
                        }
                    }>
                        <div className="content">
                            <HelpCircleOutline
                                color={'#27173E'} 
                                height="22px"
                                width="22px"
                            /> <span style={{ "margin-left": "5px" }}>Bantuan</span>
                        </div>
                    </div>
                    <div onClick={handleLogout} className="section pt-1" style={
                        {
                            "color":"#27173E",
                            "cursor": "pointer"
                        }
                    }>
                        <div className="content">
                            <ExitOutline
                                color={'#27173E'} 
                                height="22px"
                                width="22px"
                            /> <span style={{ "margin-left": "5px" }}>Keluar</span>
                        </div>
                    </div>
                </div>
              </>
            )}
        </Layout>
    )
}