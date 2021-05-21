import React from 'react';
import Layout from '@/components/layoutSub'
import ShopCategory from '@/components/shop/StoreListing'
import { findShopCategoryByCode } from '@/db/index';
import { all } from '@/middlewares/index';
import { excludeField } from '@/lib/api-helpers';
import Error from 'next/error';

export default function StoreListing({category}) {
  if (!category) return <Error statusCode={404} />;
  return (
    <Layout title={"Belanja "+category.label} >
      <ShopCategory />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  await all.run(context.req, context.res);
  const category = excludeField(await findShopCategoryByCode(context.req.db, context.params.category));
  if (!category) context.res.statusCode = 404;
  return { props: { category } };
}