export default function cleanString(str: string) {
  // replace all spaces and special characters with empty string
  str = str.replace(/[^\w\s]/gi, "").replace(/\s+/g, "-");
  // convert to lowercase
  str = str.toLowerCase();
  // return modified string
  return str;
}
