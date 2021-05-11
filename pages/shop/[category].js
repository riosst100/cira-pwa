import React from 'react';
import Layout from '@/components/layoutSub'
import PageBanner from '@/components/pageBanner'
import ShopCategory from '@/components/shop/StoreListing'

export default function StoreListing() {
  return (
    <Layout title="List Toko">
      <ShopCategory />
    </Layout>
  );
};