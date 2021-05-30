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

export async function getStoreProducts(db, store_id) {
  return db
    .collection('shop_cart')
    .find({store_id:store_id})
    .toArray();
}

export async function addProduct(db, {member_id, store_id, product_id}) 
{
  return db
    .collection('shop_cart')
    .update(
      {member_id:member_id,store_id:store_id},
      { $push: { product_ids:[product_id] } }
    );
  // return db
  //   .collection('shop_cart')
  //   .update(
  //     {member_id:member_id},
  //     { $push: { items: { store_id:store_id, product_ids:[product_id]} } }
  //   );
}