import React, { useState } from 'react';
import { useCurrentUser } from '@/hooks/index';
import Posts from '@/components/post/posts';
import Layout from '@/components/layout'
import PageBanner from '@/components/pageBanner'
import Link from 'next/link'
import { useRouter } from "next/router"

export default function Feed() {
  const [user] = useCurrentUser();
  const { query } = useRouter();
  const [msg, setMsg] = useState(null);

  if (query.success && msg != '') {
    setTimeout(() => setMsg('Posted'), 500);
  }

  setTimeout(() => setMsg(''), 4000);

  return (
      <Layout title="Informasi" hideFooter="true" backgroundColor="#bcbfc4">
          <div style={{"margin": "10px", "textAlign":"center"}}>
            <Link href="/feed/create">
              <a>
                <button className="mr-5 bg-primary hover:bg-green-700 text-white font-bold py-1 px-5 rounded focus:outline-none focus:shadow-outline">
                  Buat Postingan
                </button>
              </a>
            </Link>
            {msg && <div className="success-msg">{msg}</div>}
          </div>
          <Posts />
      </Layout>
  )
}
