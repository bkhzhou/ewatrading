import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../out/", import.meta.url);

test("exports a custom-domain GitHub Pages site", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /<title>Ewa Trading Co\. \| Chinese Herbs &amp; Tea in NYC Chinatown<\/title>/i);
  assert.match(html, /Rooted in Chinatown\. Here for generations\./);
  assert.match(html, /src="\/ewa-storefront-v2\.jpg"/);
  assert.match(html, /href="\/_next\/static\/chunks\/[^\"]+\.css"/);
  assert.match(html, /https:\/\/ewatrading\.co\/og-v2\.png/);
  assert.doesNotMatch(html, /\/ewatrading\//);
  assert.doesNotMatch(html, /ewa-trading-chinatown\.typeoffline\.chatgpt\.site/);

  await Promise.all([
    access(new URL("ewa-storefront-v2.jpg", outputRoot)),
    access(new URL("ewa-history-1.jpg", outputRoot)),
    access(new URL("ewa-detail.jpg", outputRoot)),
    access(new URL("ewa-shop.jpg", outputRoot)),
    access(new URL("og-v2.png", outputRoot)),
  ]);
});
