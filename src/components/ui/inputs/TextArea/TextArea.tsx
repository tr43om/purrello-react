import { ReactNode, TextareaHTMLAttributes } from "react";
import styled from "styled-components";

const TextArea = ({
  onChange,
  onKeyDown,
  placeholder,
  value,
  id,
  $color,
  rows,
}: TextAreaProps) => {
  return (
    <FormGroup onClick={(e) => e.stopPropagation()}>
      <FormField
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        name={id}
        id={id}
        color={$color}
        placeholder={placeholder}
        rows={rows}
      />
      <FormLabel htmlFor={id}>{placeholder}</FormLabel>
    </FormGroup>
  );
};

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  $color?: string;
}
type FormFieldProps = {
  color?: string;
  submitButton?: ReactNode;
};

const FormGroup = styled.div`
  position: relative;
  width: 100%;
`;

const FormField = styled.textarea<FormFieldProps>`
  font-family: inherit;
  resize: none;
  width: 100%;
  border: 3px solid var(--c-text-secondary);
  outline: 0;
  border-radius: 10px;
  font-size: 1rem;
  color: ${(props) => (props.color ? props.color : " var(--c-primary)")};
  padding: 1rem;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ * {
    font-size: 1rem;
    cursor: text;
    top: 15px;
    left: 15px;
  }

  &:focus {
    ~ * {
      position: absolute;
      left: 15px;
      top: -25px;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: var(--c-primary);
      font-weight: 700;
    }
    border: 3px solid var(--c-primary);

    font-weight: 700;
  }
  & ~ * {
    position: absolute;
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

export default TextArea;
