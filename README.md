To repro:

```bash
$ npm ci
$ npx playwright install
$ npm run test-ct
```

This should fail:

```
    [chromium] › src/example.spec.tsx:12:3 › dark mode › dark mode =================================
    [firefox] › src/example.spec.tsx:12:3 › dark mode › dark mode ==================================
    [webkit] › src/example.spec.tsx:12:3 › dark mode › dark mode ===================================
```

and it looks like dark mode is not getting applied.

However, if you focus that spec:

```
$ npm run test-ct -- src/example.spec.tsx:12:3
```

it passes.
