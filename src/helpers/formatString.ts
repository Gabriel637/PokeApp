export function padToFourDigits(number: number): string {
  return number.toString().padStart(4, '0');
}

export function replaceSpecialCharacters(text: string): string {
  return text.replace(/[\f\n]/g, ' ');
}