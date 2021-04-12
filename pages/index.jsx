import React from 'react';
import { useCurrentUser } from '@/hooks/index';
import PostEditor from '@/components/post/editor';
import Posts from '@/components/post/posts';
import Layout from '@/components/layout'

const IndexPage = () => {
  const [user] = useCurrentUser();

  return (
      <Layout title="Cira App">
        <div className="section content-section pt-1">
          <img className="home-banner" src="http://brebes-social.id/public/images/banner/banner-cira.png"/>
        </div>
      <div style={{ marginBottom: '2rem' }}>
        <h2>
          Hello,
          {' '}
          {user ? user.name : 'pengunjung'}
          !
        </h2>
      </div>
      </Layout>
  );
};

export default IndexPage;
