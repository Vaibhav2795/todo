export function requirePanic(obj: object, keys: string[]) {
  const missingKeys = validateRequiredKeys(obj, keys);
  if (missingKeys.length > 0) {
    throw new Error('Required keys: ' + missingKeys.join(' ,'));
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function validateRequiredKeys(obj: any, keys: string[]) {
  const missingKeys = [];
  for (const key of keys) {
    if (obj[key] == undefined || obj[key] == null) {
      missingKeys.push(key);
    }
  }
  return missingKeys;
}
