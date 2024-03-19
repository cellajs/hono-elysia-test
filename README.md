## Type Stress benchmark
Measure how long TypeScript took to process each file for each web framework.

Prerequisted:
- TypeScript CLI (tsc)
- Bun

1. Install dependencies:
```sh
bun install
```

2. Generate necessary file:
```sh
bun prepare
```

3. Measure how type inference (expected: 5-6 seconds)
```sh
bun trace
```

If trace command is successfully executed without interruption, you will see a new folder name **trace** is created with the following files:
- trace.json
- types.json

Head to [perfetto](https://ui.perfetto.dev), drag and drop **trace.json** into the page.

Once dropped, you should be able to visualize how long each file take to process.

Click on each slide, should revealed how long it took and the file path.

If you are not familiar with perfetto, please see [Type Performance tracing](https://github.com/microsoft/TypeScript-wiki/blob/main/Performance-Tracing.md)
