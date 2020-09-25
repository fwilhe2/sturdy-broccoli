import { cronToHuman } from "../src/main";

test("aa", async () => {
  expect(cronToHuman("* * * * *")).toEqual(
    "every minute every hour every day of the month every month every weekday "
  );
  // expect(cronToHuman("0 0 * * *")).toEqual("abc");
  // expect(cronToHuman("*/5 * * * *")).toEqual("abc");
});
