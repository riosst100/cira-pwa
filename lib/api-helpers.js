import safeJsonStringify from 'safe-json-stringify';

// take only needed user fields to avoid sensitive ones (such as password)
const sensitiveFields = ['email', 'emailVerified', 'password'];
export function extractUser(user) {
  if (!user) return null;
  const obj = {};
  Object.keys(user).forEach((key) => {
    if (!sensitiveFields.includes(key)) obj[key] = user[key];
  });
  return obj;
}

const storeSensitiveFields = ['_id'];
export function extractStore(store) {
  if (!store) return null;
  const obj = {};
  Object.keys(store).forEach((key) => {
    if (!storeSensitiveFields.includes(key)) obj[key] = store[key];
  });
  return obj;
}

const excludeFields = ['_id'];
export function excludeField(data) {
  if (!data) return null;
  const obj = {};
  Object.keys(data).forEach((key) => {
    if (!excludeFields.includes(key)) obj[key] = data[key];
  });
  return obj;
}

export function extractData(rawData) {
  if (!rawData) return null;
  const stringifiedData = safeJsonStringify(rawData);

  return JSON.parse(stringifiedData);
}
