/**
 * @jest-environment-jsdom
 */

const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"));

describe("Index page", () => {
  document.documentElement.innerHTML = html.toString();

  const heading = document.getElementById("main-title");

  expect(heading).toBeTruthy();

  expect(heading.textContent).toEqaul("Title");
});
