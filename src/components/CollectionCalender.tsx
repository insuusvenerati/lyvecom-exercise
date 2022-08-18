import moment from "moment";
import { useCallback } from "react";
import { Calendar, CalendarProps } from "react-big-calendar";
import { InfoCollectionWithError } from "../types/infoCollection";

type Props = CalendarProps & {
  collection: InfoCollectionWithError;
};

export const CollectionCalender = ({ collection, ...props }: Props) => {
  const epochToDate = useCallback((epoch: number | undefined) => {
    if (!epoch) return; // early return when result is undefined
    return moment.unix(epoch).utc().toDate();
  }, []);

  if (collection.loading || !collection) {
    return <h1>Loading...</h1>;
  }

  if (collection.error) return <h1> {collection.message} </h1>;

  return (
    <Calendar
      startAccessor="start"
      endAccessor="end"
      events={[
        {
          start: epochToDate(collection.result?.schedule_time),
          end: epochToDate(collection.result?.schedule_time),
          title: "Test",
        },
      ]}
      {...props}
    />
  );
};
