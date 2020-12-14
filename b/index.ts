import * as a_ts from "a/index.ts"
void (a_ts)

// only compiles when a.outDir is set and equals "./dist" (git clean -fdx when you change tsconfig)
// why?
import * as a_js from "a/index.js"
void (a_js)
