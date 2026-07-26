import { encode, decode } from "./base62.ts";
import { test } from "node:test";
import assert from "node:assert/strict";
test("roundtrip", () => {
  for (const n of [0, 1, 61, 62, 123456789]) assert.equal(decode(encode(n)), n);
});
