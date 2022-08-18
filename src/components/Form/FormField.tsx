import { InputHTMLAttributes } from "react";

export type Field = {
  label: string;
  type: string;
  accept?: string;
  value: string;
  pattern?: string;
  placeholder?: string;
};

type Props = InputHTMLAttributes<HTMLInputElement> & {
  field: Field;
};

export const FormField = ({ field, ...props }: Props) => {
  return (
    <label>
      {field.label}:{" "}
      <input
        accept={field.accept}
        type={field.type}
        multiple={field.type === "file"}
        pattern={field.pattern ? field.pattern : undefined}
        placeholder={field.placeholder}
        {...props}
      />
    </label>
  );
};
