import { rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const productionDebugAssets = resolve(projectRoot, "dist/public/__manus__");

rmSync(productionDebugAssets, { recursive: true, force: true });
console.log("Removed development-only Manus assets from the production build.");
