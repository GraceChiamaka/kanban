import styled from "styled-components";
export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.double(48, 0)};
  padding-left: ${({ theme }) => theme.spacing.custom(80)};
`;

export const Heading = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.large};
  display: flex;
  align-items: baseline;
  div {
    width: 80%;
  }
  h3 {
    color: ${({ theme }) => theme.colors.primary[500]};
    font-size: ${({ theme }) => theme.fontSize.hero};
    margin-bottom: ${({ theme }) => theme.spacing.custom(16)};
    font-family: ${({ theme }) => theme.fontFamily.avenirBlack};
  }
  p {
    width: 25%;
    font-size: ${({ theme }) => theme.fontSize.normal};
    color: ${({ theme }) => theme.colors.primary[200]};
    line-height: ${({ theme }) => theme.spacing.custom(22)};
  }
  button {
    width: 120px;
    height: 48px;
    background: ${({ theme }) => theme.colors.primary[500]};
    color: ${({ theme }) => theme.colors.primary[100]};
    border: none;
    cursor: pointer;
  }
`;

export const ColumContainer = styled.section`
  display: flex;
  width: 100%;
  overflow-x: auto;
  flex-wrap: nowrap;
  padding-bottom: ${({ theme }) => theme.spacing.large};
  gap: 24px;
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.primary[100]};
    border-radius: ${({ theme }) => theme.borderRadius.primary};
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary[400]};
    border-radius: ${({ theme }) => theme.borderRadius.primary};
  }
`;
