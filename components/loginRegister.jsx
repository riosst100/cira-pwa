import Link from 'next/link'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import useSWR from 'swr';
import fetcher from '@/lib/fetch';

export default function LoginRegister({ user }) {
  const { data } = useSWR('/api/user', fetcher);
  const loginRegister = (
    <>
        <div><b>Selamat Datang di Cira App!</b></div>
        <div className="pb-2"><small>Silahkan Daftar atau Masuk jika sudah terdaftar.</small></div>
        <div className="pb-1">
          <Link href="/register">
            <a>
          <button className="mr-5 bg-primary hover:bg-green-700 text-white font-bold py-1 px-5 rounded focus:outline-none focus:shadow-outline">
          <i className="fab fa-whatsapp"></i> Daftar
        </button>
        </a>
          </Link>
          <Link href="/login">
            <a><button className="ml-5 bg-primary hover:bg-green-700 text-white font-bold py-1 px-5 rounded focus:outline-none focus:shadow-outline">
          <i className="fab fa-whatsapp"></i> Masuk
        </button></a>
          </Link>
        </div>
      </>
  );

  return (
    <>
      <div className="section mb-1 mt-1" style={{"border": "1px solid #e9e9f1"}}>
        <div className="content text-center p-2">
          {
            data ? !data.user && loginRegister : (
              <SkeletonTheme color="#f1f2f6" highlightColor="#ffffff">
                <div><Skeleton height={15} width="50%" /></div>
                <div className="mt-1"><Skeleton height={10} width="70%" /></div>
                <div className="mb-1">
                  <span className="mr-5">
                    <Skeleton height={25} width={75} />
                  </span>
                  <span className="ml-5">
                    <Skeleton height={25} width={75} />
                  </span>
                </div>
              </SkeletonTheme>
            )
          }
        </div>
      </div>
    </>
  );
}