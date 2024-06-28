export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    idx = idx + appendString;
  }

  return array;
}
