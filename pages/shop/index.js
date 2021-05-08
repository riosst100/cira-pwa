import React from 'react';
import Layout from '@/components/layoutSub'
import TravelList from '@/components/travel/list'
import PageBanner from '@/components/pageBanner'
import ShopCategory from '@/components/shop/ShopCategory'

export default function Shop() {
  return (
    <Layout title="Toko Online">
      <PageBanner page="travel" />
      <div className="section mt-3">
        <div className="content text-center">
          <div className="pb-1">
          </div>
        </div>
      </div>
      <ShopCategory />
    </Layout>
  );
};