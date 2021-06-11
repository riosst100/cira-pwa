export async function getCarts(db, member_id) {
    return db
      .collection('shop_cart')
      .find()
      .toArray();
}

export async function getStoreGrouping(db, cart_id) {
  return db.collection('shop_cart').aggregate([
    {"$group" : {_id:"$store_id", count:{$sum:1}}}
  ]);
  return db
    .collection('shop_cart')
    .find()
    .toArray();
}

export async function getCartByStoreId(db, {member_id, store_id}) {
  return db.collection('shop_cart').findOne({
    member_id: member_id, 
    store_id: store_id
  }).then((cart) => cart || null);
}

import { nanoid } from 'nanoid';

export async function addProduct(db, {member_id, store_id, product_id}) 
{
  return db
    .collection('shop_cart')
    .updateOne(
      {member_id:member_id,store_id:store_id},
      { $push: { product_ids:[product_id] } }
    );
}

export async function addStore(db, {member_id, store_id, product_id}) 
{
  return db.collection('shop_cart').insertOne({
    _id: nanoid(12),
    member_id: member_id,
    store_id: store_id,
    product_ids: [product_id],
    created_at: new Date(),
  }).then(({ ops }) => ops[0]);
}