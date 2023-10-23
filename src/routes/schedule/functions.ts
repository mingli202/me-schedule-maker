import { Time, Class } from "../../types";

export function checkForOverlap(viewData: Class[]): boolean {
  // get all the times for all the classes
  const times: Time[] = viewData.flatMap((v) => v.viewData);

  const monday: string[] = times
    .filter((i) => i[1])
    .flatMap((k) => Object.values(k));
  const tuesday: string[] = times
    .filter((i) => i[2])
    .flatMap((k) => Object.values(k));
  const wednesday: string[] = times
    .filter((i) => i[3])
    .flatMap((k) => Object.values(k));
  const thursday: string[] = times
    .filter((i) => i[4])
    .flatMap((k) => Object.values(k));
  const friday: string[] = times
    .filter((i) => i[5])
    .flatMap((k) => Object.values(k));

  if (
    // for each day, check how many classes there are
    // if 0 or 1, there can not be any overlap
    // if more, check if at least on one day 2 classes overlop
    [monday, tuesday, wednesday, thursday, friday].some((day) => {
      if (day.length <= 1) {
        return false;
      }

      // when selecting a new class, it could overlap with another
      // hence we compare the last entry to the rest of the classes
      const last = day.at(-1) as string;

      if (
        // check for all classes in 1 day, t:day
        day.slice(0, -1).some((t) => {
          // if target class starts before added class, then target class must finish added target class
          if (Number(t[0]) > Number(last[0])) {
            return Number(last[1]) > Number(t[0]);
          }
          // if target class starts later added class, then added class must finish before target class
          if (Number(t[0]) < Number(last[0])) {
            return Number(last[0]) < Number(t[1]);
          }
          // if they start at the same time, it can't
          if (Number(t[0]) === Number(last[0])) {
            return true;
          }
          return false;
        })
      ) {
        return true;
      }
      return false;
    })
  ) {
    return true;
  }

  return false;
}
