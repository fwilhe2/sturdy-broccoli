export function cronToHuman(cron: string): string {
  const parts = cron.split(" ");
  if (parts.length != 5) {
    throw Error("invalid format in string: " + cron);
  }

  const timeUnit = ["minute", "hour", "day of the month", "month", "weekday"];

  let result = "";

  parts.forEach((element: string, index: number) => {
    if (element === "*") {
      result += `every ${timeUnit[index]} `;
    }
    const potentialNumber = Number(element);
    if (!isNaN(potentialNumber)) {
      result += `${element} ${timeUnit[index]} `;
    }
    if (/\*\/(\d)/.test(element)) {
      result += `every ${RegExp.$1}th ${timeUnit[index]} `;
    }
  });

  return result;
}
