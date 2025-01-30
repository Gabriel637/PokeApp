import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Hex.parse("NHzcVfAD1gKFEevkVEXo1CFMR6DW8Q9g");
const iv = CryptoJS.enc.Hex.parse("6qeOYw9cJSCz0chd");

export function encrypt(text: string) {
  const encrypted = CryptoJS.AES.encrypt(text, key, {
    iv
  });
  return `${iv.toString(CryptoJS.enc.Hex)}:${encrypted.toString()}`;
}

export function decrypt(encryptedString: string) {
  const [ivHex, encryptedData] = encryptedString.split(":");
  const iv = CryptoJS.enc.Hex.parse(ivHex);
  const decrypted = CryptoJS.AES.decrypt(encryptedData, key, {
    iv: iv
  });
  const utf8Decrypted = decrypted.toString(CryptoJS.enc.Utf8);
  return utf8Decrypted;
}