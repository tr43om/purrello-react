import styled from "styled-components";
// react-hook-form
import { useForm, SubmitHandler, Controller } from "react-hook-form";

// yup
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactNode } from "react";

const FormInput = <TFormValues,>({ children }: FormInputProps<TFormValues>) => {
  //   const {
  //     handleSubmit,
  //     control,
  //     formState: { errors },
  //   } = useForm<TFormValues>({
  //     resolver: yupResolver(schema),
  //   });

  //   const onSubmit: SubmitHandler<DataType> = (data) => {
  //     console.log(data);
  //   };

  return <div>FormInput</div>;
};

type FormInputProps<TFormValues> = {
  children: ReactNode;
};
export default FormInput;
