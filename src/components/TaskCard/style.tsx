import styled from "styled-components";

export const CardContainer = styled.div<{ isDragging: boolean }>`
  border-bottom: ${({ theme }) =>
    theme.border?.custom("2px", theme.colors?.primary[500])};
  border-top: ${({ theme }) =>
    theme.border?.custom("2px", theme.colors?.primary[500])};
  padding: ${({ theme }) => theme.spacing?.double(12, 8)};
  margin-bottom: ${({ theme }) => theme.spacing?.normal};
  background: ${({ theme }) => theme.colors?.white};
  p {
    color: ${({ theme }) => theme.colors?.primary[400]};
    font-size: ${({ theme }) => theme.fontSize?.custom(0.8)};
    margin: 0;
  }
  span {
    display: inline-flex;
    padding: ${({ theme }) => theme.spacing?.double(4, 8)};
    background: ${({ theme }) => theme.colors?.primary[200]};
    color: ${({ theme }) => theme.colors?.primary[400]};
    font-size: ${({ theme }) => theme.fontSize?.small};
    margin-top: ${({ theme }) => theme.spacing?.medium};
  }
`;
export const CardHeading = styled.div`
  .ant-row {
    align-items: baseline;
  }
  h3 {
    color: ${({ theme }) => theme.colors?.primary[500]};
    margin-bottom: ${({ theme }) => theme.spacing?.normal};
    font-size: ${({ theme }) => theme.fontSize?.normal};
    font-family: ${({ theme }) => theme.fontFamily?.avenirBlack};
  }
  .ant-typography {
    font-size: ${({ theme }) => theme.fontSize?.custom(0.7)};
    .anticon {
      margin: 0;
      font-size: ${({ theme }) => theme.fontSize?.normal};
    }
  }
`;

//  ${({theme}) => theme.};
