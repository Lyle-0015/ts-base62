# Base62 encode/decode

Map integers to short Base62 strings and reverse the process. I wrote this to avoid pulling heavy third-party packages into my projects just for ID generation.

There are zero external dependencies. It relies strictly on the standard library, keeping your install times fast and your dependency tree clean.

```
base62.ts
```
Look at the test file sitting next to the source for actual usage.