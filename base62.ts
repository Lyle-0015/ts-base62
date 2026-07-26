/** Base62 integer encode/decode. Zero dependencies. */
const A = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
export function encode(n: number): string {
  if (n < 0) throw new RangeError("n must be >= 0");
  if (n === 0) return "0";
  let out = "";
  while (n > 0) { out = A[n % 62] + out; n = Math.floor(n / 62); }
  return out;
}
export function decode(s: string): number {
  let n = 0;
  for (const c of s) n = n * 62 + A.indexOf(c);
  return n;
}
