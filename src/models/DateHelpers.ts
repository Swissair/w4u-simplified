import { IRange } from "./Domain";
import { addDays, isEqual } from "date-fns";

export const getDaysWithinRange = (range: IRange): Date[] => {
  let currentDate = range.startDate;
  const result: Date[] = [];

  while (currentDate <= range.endDate) {
    result.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }

  return result;
};
