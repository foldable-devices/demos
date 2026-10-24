import assert from "node:assert/strict";
import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 390, height: 740 } });
  await page.goto(pathToFileURL(resolve("continuity-reader/index.html")).href);
  const notes = page.locator("#notes");
  await notes.fill("Keep this annotation intact");
  await notes.focus();
  await notes.evaluate(el => el.setSelectionRange(5, 9));
  const before = await notes.evaluate(el => ({ start: el.selectionStart, end: el.selectionEnd }));
  await page.locator("#change-layout").click();
  await page.setViewportSize({ width: 900, height: 650 });
  await page.locator("#change-layout").click();
  assert.equal(await notes.inputValue(), "Keep this annotation intact");
  assert.deepEqual(await notes.evaluate(el => ({ start: el.selectionStart, end: el.selectionEnd })), before);
  assert.equal(await page.locator("#change-layout").getAttribute("aria-pressed"), "false");
  assert.equal(await page.locator("#notes").count(), 1);
  await page.close();
} finally {
  await browser.close();
}
