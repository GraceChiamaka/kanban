import styled from "styled-components";
import { Alert } from "antd";
import { FC } from "react";

type AlertProps = {
  type: "success" | "error";
  msg: string;
};

export const CustomAlert: FC<AlertProps> = ({ type = "success", msg }) => {
  return <Alert message={msg} type={type} closable={true} />;
};
