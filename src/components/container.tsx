import styled from "styled-components";

export const AlertContainer = styled.div`
  width: 100%;
`;
export const Loader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing?.double(64, 0)};
  padding-right: ${({ theme }) => theme.spacing?.custom(64)};
  .ant-spin {
    .ant-spin-dot {
      font-size: ${({ theme }) => theme.fontSize?.custom(2.5)};
      .ant-spin-dot-item {
        width: ${({ theme }) => theme.spacing?.normal};
        height: ${({ theme }) => theme.spacing?.normal};
        background-color: ${({ theme }) => theme.colors?.primary[500]};
      }
    }
  }
`;
