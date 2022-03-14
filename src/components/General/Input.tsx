import { FC } from "react";
import styled from "styled-components";

type InputProps = {
  placeholder?: string;
  onChange?: (ev: any) => void;
  value?: string | number;
  type?: "text" | "email";
};
export const CustomInput: FC<InputProps> = ({
  placeholder,
  onChange,
  value,
  type = "text",
}) => {
  return (
    <InputContainer>
      <input
        placeholder={placeholder}
        data-testid="custom-input"
        onChange={onChange}
        value={value}
        type={type}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
  input {
    width: 100%;
    height: ${({ theme }) => theme.spacing?.custom(48)};
    padding: ${({ theme }) => theme.spacing?.double(8, 12)};
    border: ${({ theme }) => theme.border?.input};
    outline: none;
    &:focus {
      border-color: ${({ theme }) => theme.colors?.primary[500]};
    }
  }
`;
