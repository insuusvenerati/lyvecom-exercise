import { useEffect, useState } from "react";
import { getInfoCollection } from "./api/getInfoCollection";
import { CollectionCalender } from "./components/CollectionCalender";
import { InfoCollectionWithError } from "./types/infoCollection";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Form } from "./components/Form/Form";

const initialCollectionState = { error: false, loading: false, message: "" };

const localizer = momentLocalizer(moment);

type Error = {
  message: string;
};

function App() {
  const [collection, setCollection] = useState<InfoCollectionWithError>(
    initialCollectionState
  );

  useEffect(() => {
    setCollection({ loading: true });

    getInfoCollection()
      .then((data) =>
        setCollection({
          result: data.result,
          loading: false,
        })
      )
      .catch((err: Error) =>
        setCollection({
          error: true,
          loading: false,
          message: err.message,
        })
      );
  }, []);

  return (
    <main>
      <Form />
      <CollectionCalender
        localizer={localizer}
        collection={collection}
        style={{ height: 500 }}
      />
    </main>
  );
}

export default App;
