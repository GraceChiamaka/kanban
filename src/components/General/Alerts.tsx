import styled from "styled-components";
import { Alert } from "antd";
import { FC } from "react";

type AlertProps = {
  type: "success" | "error" | "";
  msg: string;
};

export const CustomAlert: FC<AlertProps> = ({ type = "success", msg }) => {
  return (
    <AlertContainer variant={type} data-testid="custom-alert">
      <p>{msg}</p>
    </AlertContainer>
  );
};

const AlertContainer = styled.div<{ variant: "error" | "success" | "" }>``;
