import React from 'react';
import Layout from '@/components/layoutSub'
import ShopCategory from '@/components/shop/ShopCategory'

export default function Shop() {
  return (
    <Layout title="Toko Online" isShop="1">
      <ShopCategory />
    </Layout>
  );
};