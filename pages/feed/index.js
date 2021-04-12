import React from 'react';
import { useCurrentUser } from '@/hooks/index';
import PostEditor from '@/components/post/editor';
import Posts from '@/components/post/posts';
import Layout from '@/components/layout'

const Feed = () => {
  const [user] = useCurrentUser();

  return (
    <>
      <style jsx>
        {`
          p {
            text-align: center;
            color: #888;
          }
          h3 {
            color: #555;
          }
        `}
      </style>
      <Layout title="Sosial">
      <div>
        <PostEditor />
        <Posts />
      </div>
      </Layout>
    </>
  );
};

export default Feed;
