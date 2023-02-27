export function ArrayGetKeysEspecific(array: any[]) {
  const dataOfKey = [];
  for (const iterator of array) {
    dataOfKey.push(iterator.name);
  }
  return dataOfKey;
}
