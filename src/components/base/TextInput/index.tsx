import {
  Dispatch,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  SetStateAction,
  useState,
} from "react";
import { BiSearchAlt } from "react-icons/bi";

import * as S from "./styled";

export type TextFieldProps = {
  onInput?: Dispatch<SetStateAction<string>>;
  label?: string;
  labelFor?: string;
  initialValue?: string;
  disabled?: boolean;
  error?: string;
  fieldType?: HTMLInputTypeAttribute;
  buttonType?: "submit" | "button";
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({
  onInput,
  label,
  labelFor,
  initialValue = "",
  disabled = false,
  error,
  fieldType = "text",
  buttonType = "submit",
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setValue(value);

    !!onInput && onInput(value);
  };

  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          value={value}
          type={fieldType}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <S.SearchButton type={buttonType}>
          <BiSearchAlt size={"16px"} />
        </S.SearchButton>
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default TextInput;
