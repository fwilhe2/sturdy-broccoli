export function cronToHuman(cron: string): string {
  const parts = cron.split(" ");
  if (parts.length != 5) {
    throw Error("invalid format " + cron);
  }

  const m = ["minute", "hour", "day of the month", "month", "weekday"];

  let result = "";

  parts.forEach((element: string, index: number) => {
    console.log(`part ${element}`);
    if (element === "*") {
      result += `every ${m[index]} `;
    }
  });

  return result;
}
