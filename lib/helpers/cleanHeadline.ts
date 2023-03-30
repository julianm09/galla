export default function cleanHeadline(str: string) {
  if (str) {
    // remove quotation marks if present
    if (str.indexOf('"') !== -1 || str.indexOf("'") !== -1) {
      str = str.replace(/['"]+/g, "");
    }
    // replace colon with period if present
    if (str.indexOf(":") !== -1) {
      str = str.replace(/:/g, ".");
    }
    // remove hyphen if present
    // if (str.indexOf("-") !== -1) {
    //   str = str.replace(/-/g, "");
    // }
    // return modified string
    return str;
  }
  return
}
