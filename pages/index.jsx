import React from 'react';
import { useCurrentUser } from '@/hooks/index';
import Layout from '@/components/layout'
import LoginRegister from '@/components/loginRegister'

const IndexPage = () => {
  const [user] = useCurrentUser();

  return (
    <Layout title="Cira App">
      <div className="section content-section pt-1">
        <img className="home-banner" src="http://brebes-social.id/public/images/banner/banner-cira.png"/>
      </div>
      <LoginRegister user={user} />
    </Layout>
  );
};

export default IndexPage;
