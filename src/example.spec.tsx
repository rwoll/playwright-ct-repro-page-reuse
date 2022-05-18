import { test, expect } from "@playwright/experimental-ct-react";
import { Example } from "./example";

test("light mode", async ({ mount }) => {
  const component = await mount(<Example />);
  await expect(component).toHaveScreenshot();
});

test.describe("dark mode", () => {
  test.use({ colorScheme: "dark" });

  test("dark mode", async ({ mount }) => {
    const component = await mount(<Example />);
    await expect(component).toHaveScreenshot();
  });
});

test("light mode 2", async ({ mount }) => {
  const component = await mount(<Example />);
  await expect(component).toHaveScreenshot();
});
