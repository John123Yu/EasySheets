export default function validAlphaNum(input) {
  //regex for number, symbol, letter
  if (/[a-zA-Z0-9-_]/.test(input)) return true;
  return false;
}
