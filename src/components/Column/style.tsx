import styled from "styled-components";

export const ColumnContainer = styled.div`
  width: ${({ theme }) => theme.spacing.custom(300)};
  flex: 0 0 300px;
  flex-direction: column;
  display: flex;
  background: ${({ theme }) => theme.colors.primary[100]};
  padding: 8px;
  position: relative;
  height: 100%;
`;

export const Heading = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.spacing.normal};

  margin-bottom: 8px;
  h2 {
    font-size: ${({ theme }) => theme.fontSize.heading};
    font-family: ${({ theme }) => theme.fontFamily.avenirRoman};
  }
  p {
    color: ${({ theme }) => theme.colors.primary[200]};
  }
`;
export const ColumnContent = styled.div<{ columnHeight: "small" | "large" }>`
  padding: ${({ theme }) => theme.spacing.double(0, 8)};
  margin-top: ${({ theme }) => theme.spacing.custom(8)};
  min-height: 200px;
  background: ${({ theme, columnHeight }) =>
    columnHeight === "large" ? theme.colors.white : "transparent"};
  margin-bottom: ${({ theme }) => theme.spacing.custom(40)};
  max-height: calc(100vh - 300px);
  overflow-y: auto;
`;

//  ${({theme}) => theme.};
