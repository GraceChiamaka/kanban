import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing?.large};

  .ant-row {
    width: 100%;
    align-items: baseline;
  }

  h3 {
    color: ${({ theme }) => theme.colors?.primary[500]};
    font-size: ${({ theme }) => theme.fontSize?.hero};
    margin-bottom: ${({ theme }) => theme.spacing?.custom(16)};
    font-family: ${({ theme }) => theme.fontFamily?.avenirBlack};
  }
  p {
    width: 35%;
    font-size: ${({ theme }) => theme.fontSize?.normal};
    color: ${({ theme }) => theme.colors?.primary[200]};
    line-height: ${({ theme }) => theme.spacing?.custom(22)};
  }
  button {
    width: 120px;
    height: 48px;
    background: ${({ theme }) => theme.colors?.primary[500]};
    color: ${({ theme }) => theme.colors?.primary[100]};
    border: none;
    cursor: pointer;
  }
`;
