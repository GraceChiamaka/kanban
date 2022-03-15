import styled from "styled-components";

export const Container = styled.main`
  padding: ${({ theme }) => theme.spacing?.double(48, 80)};

  ${({ theme }) => theme.media?.mobile} {
    padding: ${({ theme }) => theme.spacing?.double(48, 24)};
  }
`;

export const ColumContainer = styled.section`
  display: flex;
  width: 100%;
  overflow-x: auto;
  flex-wrap: nowrap;
  padding-bottom: ${({ theme }) => theme.spacing?.large};
  gap: 24px;
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors?.primary[100]};
    border-radius: ${({ theme }) => theme.borderRadius?.primary};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors?.primary[400]};
    border-radius: ${({ theme }) => theme.borderRadius?.primary};
  }
`;
