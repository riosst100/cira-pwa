import React from 'react';
import { useCurrentUser } from '@/hooks/index';
import PostEditor from '@/components/post/editor';
import Posts from '@/components/post/posts';
import Layout from '@/components/layout'
import PageBanner from '@/components/pageBanner'

export default function Feed() {
  const [user] = useCurrentUser();

  return (
      <Layout title="Sosial">
          <PageBanner page="home" />
          <PostEditor />
          <Posts />
      </Layout>
  )
}
