/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyFile(src, dest) {
  fs.copyFileSync(src, dest);
}

function main() {
  const buildDir = path.join(__dirname, "..", "build");
  const indexHtml = path.join(buildDir, "index.html");

  if (!fs.existsSync(indexHtml)) {
    console.error(`postbuild: missing ${indexHtml}. Did you run "npm run build"?`);
    process.exit(1);
  }

  // Create /me that serves the same SPA (no redirect).
  // Assets are referenced from root ("/static/...") so this works for both:
  // - https://www.voltgizerz.fun/
  // - https://www.voltgizerz.fun/me/
  const meDir = path.join(buildDir, "me");
  ensureDir(meDir);

  copyFile(indexHtml, path.join(meDir, "index.html"));
  console.log("postbuild: wrote build/me/index.html");
}

main();

