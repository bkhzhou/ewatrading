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
  assert.match(html, /<link rel="canonical" href="https:\/\/ewatrading\.co\/"\/>/);
  assert.match(html, /Stories from Welcome to Chinatown\./);
  assert.match(html, /business-spotlight-ewa-trading-company/);
  assert.match(html, /then-and-now-ewa-trading/);
  assert.match(html, /ewa-mr-zhou-counter\.webp/);
  assert.match(html, /ewa-herbs-assortment\.jpg/);
  assert.match(html, /ewa-ginseng-roots\.jpg/);
  assert.match(html, /ewa-herb-dosage\.jpg/);
  assert.match(html, /ewa-tea\.jpg/);
  assert.match(html, /Derick Marquez Photography/);
  assert.match(html, /@ewatradingnyc/);
  assert.match(html, /Open navigation menu/);
  assert.match(html, /Jump to any part of the shop’s story/);
  assert.match(html, /https:\/\/share\.google\/kLKVi41SoSOsJe8rd/);
  assert.match(html, /https:\/\/www\.yelp\.com\/biz\/ewa-trading-new-york/);
  assert.doesNotMatch(html, /\/ewatrading\//);
  assert.doesNotMatch(html, /ewa-trading-chinatown\.typeoffline\.chatgpt\.site/);

  await Promise.all([
    access(new URL("ewa-storefront-v2.jpg", outputRoot)),
    access(new URL("ewa-history-1.jpg", outputRoot)),
    access(new URL("ewa-detail.jpg", outputRoot)),
    access(new URL("ewa-shop.jpg", outputRoot)),
    access(new URL("ewa-mr-zhou-counter.webp", outputRoot)),
    access(new URL("ewa-herbs-assortment.jpg", outputRoot)),
    access(new URL("ewa-ginseng-roots.jpg", outputRoot)),
    access(new URL("ewa-herb-dosage.jpg", outputRoot)),
    access(new URL("ewa-tea.jpg", outputRoot)),
    access(new URL("og-v2.png", outputRoot)),
  ]);
});

test("exports search-engine discovery files", async () => {
  const [robots, sitemap] = await Promise.all([
    readFile(new URL("robots.txt", outputRoot), "utf8"),
    readFile(new URL("sitemap.xml", outputRoot), "utf8"),
  ]);

  assert.match(robots, /^User-agent: \*$/m);
  assert.match(robots, /^Allow: \/$/m);
  assert.match(robots, /^Sitemap: https:\/\/ewatrading\.co\/sitemap\.xml$/m);
  assert.match(sitemap, /<loc>https:\/\/ewatrading\.co\/<\/loc>/);
  assert.match(sitemap, /xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"/);
});
