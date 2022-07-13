/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const path = require("path");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"));

describe("Index page", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  test("It displays relevant title", () => {
    const heading = document.getElementById("main-title");

    expect(heading).toBeTruthy();

    expect(heading.textContent).toEqual("Title");
  });
});
