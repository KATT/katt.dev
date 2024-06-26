import { expect, expectTypeOf, test, vi } from "vitest";
import { dedupe } from "./utils.js";

test("dedupe", async () => {
  const spy = vi.fn();
  const fn = dedupe(async () => {
    spy();
    return "hello" as const;
  });

  const result = await fn();
  expectTypeOf(result).toEqualTypeOf<"hello">();
  expect(result).toBe("hello");

  await fn();
  expect(spy).toHaveBeenCalledTimes(2);

  // parallel calls
  const results = await Promise.all([fn(), fn(), fn()]);
  expect(results).toEqual(["hello", "hello", "hello"]);

  expect(spy).toHaveBeenCalledTimes(3);
});

test("dedupe generic fn", async () => {
  const spy = vi.fn();
  async function originalFn<T>(arg: T) {
    spy(arg);
    return arg;
  }
  const fn = dedupe(originalFn);

  const result = await fn("foo" as const);
  expectTypeOf(result).toEqualTypeOf<"foo">();
});
