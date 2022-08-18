import { useMemo } from "react";
import { useForm } from "../../hooks/useForm";
import { Field, FormField } from "./FormField";

type Form = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  images: File[];
  pdfs: File[];
};

const initialFormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
};

export const Form = () => {
  const {
    handleChange,
    handleSubmit,
    fieldValues,
    isSubmitting,
    isSuccess,
    handleFileInput,
  } = useForm<Form>(initialFormData);

  const fields: Field[] = useMemo(
    () => [
      {
        label: "First Name",
        value: "first_name",
        type: "text",
        pattern: "[a-zA-Z]*", // This will not validate symbols. Normally a validation library would be used
      },
      {
        label: "Last Name",
        value: "last_name",
        type: "text",
        pattern: "[a-zA-Z]*", // This will not validate symbols. Normally a validation library would be used
      },
      {
        label: "Email",
        value: "email",
        type: "email",
      },
      {
        label: "Phone",
        value: "phone",
        type: "tel",
        pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
        placeholder: "123-123-4567",
      },
    ],
    []
  );

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormField
          value={fieldValues[field.value]}
          onChange={handleChange(field.value)}
          field={field}
          key={field.label}
          required
        />
      ))}

      <label>
        Image:{" "}
        <input
          type="file"
          onChange={handleFileInput}
          multiple
          accept="image/*"
        />
      </label>

      <button style={{ width: 150 }}>Submit</button>
      {isSubmitting && <span>Submitting...</span>}
      {isSuccess && <span>Successfully sent</span>}
    </form>
  );
};
