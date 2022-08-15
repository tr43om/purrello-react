import styled from "styled-components";
import { ReactNode } from "react";

// react-hook-form
import {
  useForm,
  UseControllerProps,
  SubmitHandler,
  Controller,
  FieldValues,
  Path,
  useController,
  Control,
} from "react-hook-form";

// yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { Input } from "../ui/inputs/Input";
import { Error } from "../ui/Error";
import { TextArea } from "../ui";

import { InputHTMLAttributes } from "react";

const FormInput = <TFormValues extends FieldValues>(
  props: FormInputProps<TFormValues>
) => {
  // const {
  //   handleSubmit,
  //   control,
  //   reset,
  //   formState: { errors },
  // } = useForm<TFormValues>({
  //   resolver: yupResolver(schema),
  // });

  const {
    field: { onChange, onBlur, value, ref },
    formState: { errors },
  } = useController(props);

  const errorMessage = errors[props.name]?.message?.toString();

  return (
    <Form>
      <FieldContainer>
        {props.type === "textarea" ? (
          <TextArea
            onChange={(e) => onChange(e)}
            value={value}
            placeholder={props.placeholder || "Type a new value..."}
          />
        ) : (
          <Input
            id={props.name}
            placeholder={props.placeholder || "Type a new value..."}
            onChange={(e) => onChange(e)}
            value={value}
            onKeyDown={props.onKeyDown}
            onBlur={props.onBlur}
          />
        )}
        {props.button}
      </FieldContainer>

      {errors[props.name]?.message && <Error>{errorMessage}</Error>}
    </Form>
  );
};

type SchemaType = yup.InferType<any>;

interface FormInputProps<TFormValues extends FieldValues>
  extends UseControllerProps<TFormValues>,
    Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue"> {
  button?: ReactNode;
  type?: string;
  placeholder?: string;
  name: Path<TFormValues>;
  schema?: SchemaType;
  onSubmit?: SubmitHandler<FieldValues>;
}

const Form = styled.div`
  width: 100%;
`;

const FieldContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  width: 100%;

  & > *:last-child {
    margin-top: 1rem;
  }
`;

export default FormInput;
