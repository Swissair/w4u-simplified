export interface ApiResponse<T> {
  data: T;
  status: string;
}

export interface IRange {
  startDate: Date;
  endDate: Date;
  key: string;
}

export interface ReservationSettings {
  minDaysOfStay: number;
  datesUnavailable: Date[];
}

export interface Enquiry {
  fullName: string;
  email: string;
  title: string;
  message: string;
  dateRange: IRange;
}

export const toIsoRange = (inputRange: IRange): IRange => {
  const start = new Date(inputRange.startDate.toISOString());
  const end = new Date(inputRange.endDate.toISOString());

  return { startDate: start, endDate: end, key: inputRange.key };
};
