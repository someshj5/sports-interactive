export function truncateString(string, length) {
  let _string = string;
  if (string.length > length) {
    _string = string.slice(0, length) + "..";
  }
  return _string;
}
