export async function getMember(db) {
  return db
    .collection('users')
    .find()
    // .sort({ createdAt: -1 })
    // .limit(limit || 10)
    .toArray();
}

export async function searchMember(db, q) {
  return db
    .collection('users')
    .find({"name": new RegExp(".*"+q+".*", "i")})
    .toArray();
}

export async function updateAndroidMemberData(db, {member_id, token}) 
{
  return db
    .collection('users')
    .updateOne(
      { _id: member_id },
      { 
        $set: { fcm_token: token },
        $currentDate: { updateAt: true }
      }
    );
}