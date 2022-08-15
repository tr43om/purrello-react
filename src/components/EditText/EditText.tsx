import { v4 as uuid } from "uuid";
import { ReactNode, InputHTMLAttributes } from "react";

//redux & yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

// components
import { FormInput } from "../FormInput";

const EditText = ({
  startEditing,
  placeholder = "Type to edit...",
  children,
  store,
  defaultValue,
}: EditTextType) => {
  const storeData: SubmitHandler<DataType> = (data) => {
    store(data.text);
    reset();
  };

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      text: defaultValue || "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  if (children) {
    return (
      <>
        {startEditing ? (
          <form onSubmit={handleSubmit(storeData)}>
            <FormInput
              placeholder={placeholder}
              name="text"
              control={control}
            />
          </form>
        ) : (
          children
        )}
      </>
    );
  } else {
    return (
      <form onSubmit={handleSubmit(storeData)}>
        <FormInput
          placeholder={placeholder}
          id={uuid()}
          name="text"
          color="#fff"
        />
      </form>
    );
  }
};

export default EditText;

const schema = yup.object().shape({
  text: yup.string().min(1, "You should type at least 1 character"),
});

interface EditTextType
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue"> {
  startEditing?: Boolean;
  children?: ReactNode;
  store: (value: string) => void;
  defaultValue?: string;
}

type DataType = {
  text: string;
};
