import { cronToHuman } from "../src/cron";

test("test cron to human", async () => {
  //Jede Minute, rund um die Uhr, sieben Tage die Woche
  expect(cronToHuman("* * * * *")).toEqual(
    "every minute every hour every day of the month every month every weekday "
  );

  //Täglich null Uhr
  expect(cronToHuman("0 0 * * *")).toEqual(
    "0 minute 0 hour every day of the month every month every weekday "
  );

  //Fünf Minuten nach jeder vollen Stunde
  expect(cronToHuman("5 * * * *")).toEqual(
    "5 minute every hour every day of the month every month every weekday "
  );

  //Fünf Minuten nach jeder vollen Stunde
  expect(cronToHuman("*/5 * * * *")).toEqual(
    "every 5th minute every hour every day of the month every month every weekday "
  );
});
