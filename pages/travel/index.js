import React from 'react';
import Layout from '@/components/layoutSub'
import TravelList from '@/components/travel/list'
import PageBanner from '@/components/pageBanner'

export default function Travel() {
  return (
    <Layout title="Jasa Travel">
      <PageBanner page="travel" />
      <div className="section mt-3">
        <div className="content text-center">
          <div className="pb-1">
            
          </div>
        </div>
      </div>
      <TravelList />
    </Layout>
  );
};