import {
  InfoCollection,
  InfoCollectionWithError,
} from "../types/infoCollection";

export const getInfoCollection = async (): Promise<InfoCollectionWithError> => {
  const response = await fetch(
    "https://api.lyvecom.com/1/personalmeeting/62fb982844bd0a43436934fc"
  );

  if (!response.ok) {
    await Promise.reject({
      message:
        response.status === 500
          ? "A server error occured"
          : "An unknown error occured",
    });
  }

  const collection = (await response.json()) as InfoCollection;

  return {
    error: false,
    message: "Success",
    loading: false,
    result: collection.result,
  };
};
