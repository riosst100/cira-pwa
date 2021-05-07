import React from 'react';
import { useCurrentUser } from '@/hooks/index';
import PostEditor from '@/components/post/editor';
import Layout from '@/components/layoutSub'

export default function CreateFeed() {
  const [user] = useCurrentUser();

  return (
      <Layout title="Buat Postingan">
          <PostEditor />
      </Layout>
  )
}
