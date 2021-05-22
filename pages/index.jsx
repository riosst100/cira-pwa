import React from 'react';
import { useCurrentUser } from '@/hooks/index';
import Layout from '@/components/layout'
import LoginRegister from '@/components/loginRegister'
import Category from '@/components/category'
import PageBanner from '@/components/pageBanner'
import Skeleton from 'react-loading-skeleton';
import { useState } from 'react'
import GlobalBlockNotif from '@/components/GlobalBlockNotif'

const IndexPage = () => {
  const [user] = useCurrentUser();
  const [isCategoryReady, setIsCategoryReady] = useState(false);

    const timeout = 1000 + Math.floor(Math.random() * 5000)
    setTimeout(() => {
      setIsCategoryReady(true)
    }, timeout);

  return (
    <Layout title="Cira App">
      <PageBanner page="home" />
      <GlobalBlockNotif />
      <LoginRegister user={user} />
      <Category />
    </Layout>
  );
};

export default IndexPage;
