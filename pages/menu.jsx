import Layout from '@/components/layout'
import { useCurrentUser } from '@/hooks/index';
import { useRouter } from 'next/router'
import NProgress from '@/components/nprogress';

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
            <div className="section content-section pt-1">
                <div className="content">
                    <div className="balance">
                        <div className="left">
                            <span className="title"><b></b>!</span>
                        </div>
                    </div>
                </div>
            </div>
            {!user ? (
              <>
              </>
            ) : (
              <>
                <div className="section pt-1">
                    <div className="content">
                        <div>
                            <a tabIndex={0} role="button" onClick={handleLogout}>Keluar</a>
                        </div>
                    </div>
                </div>
              </>
            )}
        </Layout>
    )
}