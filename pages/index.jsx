import React from 'react';
import { useCurrentUser } from '@/hooks/index';
import Layout from '@/components/layout'
import LoginRegister from '@/components/loginRegister'
import Category from '@/components/category'
import PageBanner from '@/components/pageBanner'

const IndexPage = () => {
  const [user] = useCurrentUser();

  return (
    <Layout title="Cira App">
      <PageBanner page="home" />
      <LoginRegister user={user} />
      <Category />
    </Layout>
  );
};

export default IndexPage;
