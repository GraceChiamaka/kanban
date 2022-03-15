import styled from "styled-components";

export const Container = styled.main`
  padding: ${({ theme }) => theme.spacing?.double(48, 80)};
  ${({ theme }) => theme.media?.mobile} {
    padding: ${({ theme }) => theme.spacing?.double(48, 24)};
  }
`;

export const ContentContainer = styled.section`
  margin-top: ${({ theme }) => theme.spacing?.custom(40)};
  text-align: center;
  h3 {
    text-align: center;
    color: ${({ theme }) => theme.colors?.primary[500]};
    font-size: ${({ theme }) => theme.fontSize?.hero};
    margin-bottom: ${({ theme }) => theme.spacing?.custom(16)};
    font-family: ${({ theme }) => theme.fontFamily?.avenirBlack};
  }
  p {
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
  ${({ theme }) => theme.media?.mobile} {
    margin-top: ${({ theme }) => theme.spacing?.custom(0)};
    h3 {
      font-size: ${({ theme }) => theme.fontSize?.custom(1.7)};
      line-height: ${({ theme }) => theme.spacing?.custom(36)};
    }
    button {
      width: 100%;
    }
  }
`;
