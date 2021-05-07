import React, { useState } from 'react';
import { useCurrentUser } from '@/hooks/index';
import MemberList from '@/components/member/list';
import Layout from '@/components/layoutSub'
import PageBanner from '@/components/pageBanner'
import { useRouter } from "next/router"

export default function MemberIndexPage() {
  const [user] = useCurrentUser();
  const { query } = useRouter();
  const [msg, setMsg] = useState(null);

  if (query.success && msg != '') {
    setTimeout(() => setMsg('Posted'), 500);
  }

  setTimeout(() => setMsg(''), 4000);

  return (
        <Layout title="Member Cira">
            <PageBanner page="home" />
            <MemberList />
        </Layout>
    )
}
