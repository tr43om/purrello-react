import styled from "styled-components";
import { ReactNode } from "react";

// react-hook-form
import {
  useForm,
  SubmitHandler,
  Controller,
  FieldValues,
  Path,
} from "react-hook-form";

// yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { Input } from "../ui/inputs/Input";
import { Error } from "../ui/Error";
import { TextArea } from "../ui";
import { clear } from "console";

const FormInput = <TFormValues extends FieldValues>({
  button,
  name,
  schema,
  onSubmit,
  placeholder,
  type,
}: FormInputProps<TFormValues>) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: yupResolver(schema),
  });

  const errorMessage = errors[name]?.message?.toString();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FieldContainer>
        <Controller
          control={control}
          name={name}
          render={({ field }) =>
            type === "textarea" ? (
              <TextArea
                onChange={(e) => field.onChange(e)}
                value={field.value}
              />
            ) : (
              <Input
                id={name}
                placeholder={placeholder || "Type a new value..."}
                onChange={(e) => field.onChange(e)}
                value={field.value}
              />
            )
          }
        />
        {button}
      </FieldContainer>

      {errors[name]?.message && <Error>{errorMessage}</Error>}
    </Form>
  );
};

type SchemaType = yup.InferType<any>;

type FormInputProps<TFormValues> = {
  button?: ReactNode;
  type?: string;
  placeholder?: string;
  name: Path<TFormValues>;
  schema: SchemaType;
  onSubmit: SubmitHandler<FieldValues>;
};

const Form = styled.form``;

const FieldContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;

  & > *:last-child {
    margin-top: 1rem;
  }
`;

export default FormInput;
