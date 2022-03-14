import styled from "styled-components";

export const AddCardContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 12px;
  padding: 4px;
  left: 0;
  button {
    cursor: pointer;
    width: 100%;
    height: 32px;
    border: none;
  }
`;

export const FormContainer = styled.div`
  background: ${({ theme }) => theme.colors?.white};
  padding: ${({ theme }) => theme.spacing?.double(4, 8)};
  .ant-form-item {
    margin-bottom: ${({ theme }) => theme.spacing?.custom(12)};
  }
  input {
    border: none;
    box-shadow: 0 0px 6px 0px rgba(154, 154, 154, 0.4);
  }
  textarea {
    width: 100%;
    height: ${({ theme }) => theme.spacing?.custom(80)};
    padding: ${({ theme }) => theme.spacing?.double(8, 12)};
    border: none;
    box-shadow: 0 0px 6px 0px rgba(154, 154, 154, 0.4);
    outline: none;
    &:focus {
      border-color: ${({ theme }) => theme.colors?.primary[500]};
    }
  }
`;
