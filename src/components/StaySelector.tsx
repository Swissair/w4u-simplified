import { useState } from "react";
import { addDays } from "date-fns";
import { pl } from "date-fns/locale";
import { DateRange } from "react-date-range";
import { IRange, toIsoRange } from "../models/Domain";
import { getDaysWithinRange } from "../models/DateHelpers";
import { isMobile } from "react-device-detect";

const StaySelector = () => {
  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
    },
  ]);

  const [unavailableDates] = useState<Date[]>(
    getDaysWithinRange({
      startDate: new Date("2024-06-22T14:48:00.000Z"),
      endDate: new Date("2024-07-07T14:48:00.000Z"),
      key: "selection",
    })
  );
  const minStay = useState<number>(6);

  const [isSelectionValid, setIsSelectionValid] = useState<boolean>(true);

  const setSelectedDates = (ranges: IRange[]) => {
    const range = ranges[0];
    const daysWithinSelectedRange = getDaysWithinRange(range);
    if (daysWithinSelectedRange.length < minStay[0]) {
      setIsSelectionValid(false);
    } else {
      setIsSelectionValid(true);
      setSelectedRange([toIsoRange(range)]);
    }
  };

  return (
    <div className="site-section-sm">
      <div className="container">
        <div className="row">
          <div className="p-4 bg-white">
            <h3 className="h5 text-black mb-3">Dostępne terminy</h3>

            <p className="mb-4 text-black">
              Terminy niedostępne są wyszarzone na poniższym kalendarzu. Obecnie
              nie możemy przyjąć pobytów krótszych niż 6 noclegów.
            </p>

            {!isSelectionValid && (
              <p className="mb-4 text-black">
                Wybrany okres jest krótszy niż minimalny czas pobytu -{" "}
                {minStay[0]} dni
              </p>
            )}
          </div>

          <DateRange
            dateDisplayFormat={"d MMMM yyyy"}
            disabledDates={unavailableDates}
            minDate={new Date()}
            locale={pl}
            months={3}
            direction={isMobile ? "vertical" : "horizontal"}
            editableDateInputs={false}
            // onChange={(item) => setState([item.selection])}
            onChange={(item) => setSelectedDates([item.selection as IRange])}
            moveRangeOnFirstSelection={false}
            ranges={selectedRange}
          />
        </div>
      </div>
    </div>
  );
};

export default StaySelector;
