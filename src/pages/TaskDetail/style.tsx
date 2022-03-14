import styled from "styled-components";

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing?.double(48, 80)};
`;
export const TaskContainer = styled.div`
  h1 {
    font-family: ${({ theme }) => theme.fontFamily?.avenirBlack};
    font-size: ${({ theme }) => theme.fontSize?.custom(2)};
  }
  h3 {
    font-family: ${({ theme }) => theme.fontFamily?.avenirBlack};
    font-size: ${({ theme }) => theme.fontSize?.heading};
  }
`;
export const Description = styled.div`
  max-height: ${({ theme }) => theme.spacing.custom(350)};
  overflow-y: scroll;
  p {
    font-family: ${({ theme }) => theme.fontFamily?.avenirRoman};
  }
`;
