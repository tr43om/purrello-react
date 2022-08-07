import { Input } from "../ui";
import { v4 as uuid } from "uuid";
import {
  ReactNode,
  InputHTMLAttributes,
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { toast } from "react-toastify";

const EditText = ({
  value,
  setValue,
  startEditing,
  setStartEditing,
  placeholder = "Type to edit...",
  children,
  store,
}: EditTextType) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Escape") {
      if (event.target.value.trim() === "") {
        toast.error("You should type smth, bro 👁️");
      } else {
        event.target.blur();
      }
    }
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (event.target.value.trim() !== "") {
      store();
      setStartEditing?.(false);
    } else {
      setStartEditing?.(false);
    }
  };

  if (children) {
    return (
      <>
        {startEditing ? (
          <Input
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            placeholder={placeholder}
            id={uuid()}
            color="#fff"
          />
        ) : (
          children
        )}
      </>
    );
  } else {
    return (
      <Input
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        placeholder={placeholder}
        id={uuid()}
        color="#fff"
      />
    );
  }
};

export default EditText;
interface EditTextType extends InputHTMLAttributes<HTMLInputElement> {
  setValue: (value: string) => void;
  startEditing?: Boolean;
  setStartEditing?: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
  store: () => void;
}
