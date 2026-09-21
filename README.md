# Base62 encode/decode

Turn integers into short Base62 IDs and decode them back. Shorter IDs mean smaller database indexes and fewer tokens when passing them around in LLM prompts. I wrote this to keep things fast and avoid pulling in heavy third-party packages.

This TypeScript implementation relies entirely on the standard library. You do not need to install any external services or npm dependencies. That keeps your bundle size small and prevents vendor lock-in.

```
base62.ts
```
Check the test file sitting right next to the implementation if you need to see how the encoding logic actually works in practice.