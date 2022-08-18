import { ChangeEvent, SyntheticEvent, useState } from "react";
import { postFormData } from "../api/postFormData";

export const useForm = <T extends Record<keyof T, any> = {}>(
  initialFormData: Partial<T>
) => {
  const [formState, setFormState] = useState({
    isError: false,
    isSubmitting: false,
    isSubmitted: false,
    isSuccess: false,
    errorMessage: "",
    fieldValues: initialFormData,
    fieldFiles: [] as File[],
  });

  const {
    isError,
    isSubmitting,
    errorMessage,
    isSubmitted,
    isSuccess,
    fieldValues,
    fieldFiles,
  } = formState;

  const handleFileInput = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(
      event.target.files !== null ? event.target.files : []
    );
    setFormState((prevData) => ({ ...prevData, fieldFiles: files }));
  };

  const handleChange =
    (key: string) => (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      setFormState((prevState) => ({
        ...prevState,
        fieldValues: {
          ...prevState.fieldValues,
          [key]: value,
        },
      }));
    };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState((prevState) => ({ ...prevState, isSubmitting: true }));
    try {
      const formData = new FormData();
      fieldFiles.map((file) => formData.append(file.name, file));
      const values = Object.keys(fieldValues).map((key) => ({
        label: key,
        value: fieldValues[key],
      }));

      console.log(values);

      values.map((value) => formData.append(value.label, value.value));

      postFormData(formData)
        .then((res) => console.log(res))
        .finally(() =>
          setFormState((prevState) => ({
            ...prevState,
            isSubmitting: false,
            isSubmitted: true,
            isSuccess: true,
          }))
        );
      // console.log("result", result);
    } catch (error) {
      setFormState((prevState) => ({
        ...prevState,
        errorMessage: "Error submitting form",
        isError: true,
        isSubmitting: false,
      }));
    }
  };

  console.log(formState);

  return {
    formState,
    fieldValues,
    handleChange,
    handleSubmit,
    isError,
    isSubmitting,
    isSubmitted,
    isSuccess,
    errorMessage,
    handleFileInput,
  };
};
