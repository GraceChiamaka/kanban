import { FC } from "react";
import { Spin } from "antd";
import styled from "styled-components";

type ButtonProps = {
  variant: "default" | "secondary";
  text: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
};
export const Button: FC<ButtonProps> = ({
  text,
  variant = "default",
  onClick,
  isLoading,
  disabled,
}) => {
  return (
    <ButtonContainer onClick={onClick} variant={variant} disabled={disabled}>
      <span>{text}</span> {isLoading && <Spin />}
    </ButtonContainer>
  );
};

// Button component styles

const handleBgColor = (type, colors) => {
  return type === "default" ? colors.primary[500] : colors.primary[200];
};
const handleColor = (type, colors) => {
  return type === "default"
    ? colors.white
    : type === "secondary"
    ? colors.white
    : colors.primary[200];
};

const ButtonContainer = styled.button<{ variant: "default" | "secondary" }>`
  height: ${({ theme }) => theme.spacing.custom(48)};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: ${({ theme, variant }) => handleBgColor(variant, theme.colors)};
  color: ${({ theme, variant }) => handleColor(variant, theme.colors)};
  cursor: pointer;
  align-items: center;
  gap: 3px;
  &:disabled {
    cursor: not-allowed;
  }
  .ant-spin {
    .ant-spin-dot {
      font-size: 14px;
      .ant-spin-dot-item {
        background-color: ${({ theme }) => theme.colors.white};
        width: 6px;
        height: 6px;
      }
    }
  }
`;

// ${({theme}) => theme.};
