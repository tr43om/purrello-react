import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const Input = ({
  onChange,
  onBlur,
  onKeyDown,
  placeholder,
  value,
  id,
  color,
}: InputProps) => {
  return (
    <FormGroup onClick={(e) => e.stopPropagation()}>
      <FormField
        type="input"
        className="form__field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        name={id}
        id={id}
        required
        autoFocus
        color={color}
      />

      <FormLabel htmlFor={id} className="form__label">
        {placeholder}
      </FormLabel>
    </FormGroup>
  );
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  width: 100%;
`;

const FormField = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: ${(props) => (props.color ? props.color : "#000")};
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #861657;
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
  color: $gray;
`;

export default Input;
