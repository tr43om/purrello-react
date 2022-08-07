import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const Input = ({
  onChange,
  onBlur,
  onKeyDown,
  placeholder,
  value,
  id,
  $color,
  type = "text",
}: InputProps) => {
  return (
    <FormGroup onClick={(e) => e.stopPropagation()}>
      <FormField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        name={id}
        id={id}
        required
        autoFocus
        color={$color}
      />

      <FormLabel htmlFor={id}>{placeholder}</FormLabel>
    </FormGroup>
  );
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  $color?: string;
}
type FormFieldProps = {
  color?: string;
};

const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  width: 100%;
`;

const FormField = styled.input<FormFieldProps>`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid var(--c-text-secondary);
  outline: 0;
  font-size: 1rem;
  color: ${(props) => (props.color ? props.color : " var(--c-primary)")};
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ * {
    font-size: 1rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ * {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: var(--c-primary);
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #f70a8d, #861657);
    border-image-slice: 1;
  }
`;

const FormLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: var(--c-text-secondary);
`;

export default Input;