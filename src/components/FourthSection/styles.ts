import styled from 'styled-components';

import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 0 30rem 10rem 30rem;
`;

export const LeftWrapper = styled.div`
  width: 53.7rem;
`;

export const RightWrapper = styled.div``;

export const Title = styled.h1`
  position: relative;
  font-size: 6rem;
  font-weight: 700;

  color: var(--blue);

  margin-bottom: 2.5rem;
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;

  color: var(--light-gray);
`;

export const Button = styled.button`
  width: 25.5rem;
  height: 9rem;

  font-size: 2.2rem;
  font-weight: 700;

  color: var(--white);
  background-color: var(--blue);

  border: none;

  transition-duration: 0.1s;
  box-shadow: 0px 14px 27px rgba(0, 0, 0, 0.15);

  :hover {
    transform: scale(1.03);
    transition-duration: 0.1s;
  }
`;

export const Absolute = styled.div`
  position: absolute;

  top: -1rem;
  left: 0;

  width: 6.1rem;
  height: 0.4rem;
`;

export const LineWrapper = styled.div`
  position: relative;

  width: 6.1rem;
  height: 0.4rem;
`;

export const Line = styled(Image)``;
