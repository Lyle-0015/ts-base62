# Base62 encode/decode

Convert integers into short base62 strings and decode them back. I wrote this to keep payload sizes small and avoid pulling in extra packages. It relies entirely on the TypeScript standard library, so you do not need to install any external services or dependencies.

```
base62.ts
```
Check the test file located next to the core implementation to see how it handles actual encoding and decoding in practice.