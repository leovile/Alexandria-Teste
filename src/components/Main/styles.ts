import styled from 'styled-components';

import Image from 'next/image';

export const Container = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;

  padding-top: 10rem;
`;

export const AbsoluteBlue = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  width: 80%;
  height: 90rem;
`;

export const BlueRectangleWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;
export const BlueRectangle = styled(Image)``;

export const LeftWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 50%;

  padding-left: 20rem;
  padding-top: 15rem;
`;

export const RightWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const Title1 = styled.div`
  position: relative;
  font-size: 2.4rem;
  font-weight: 400;

  color: var(--dark-gray);

  margin-bottom: 1rem;
`;

export const Title2 = styled.p`
  font-size: 6rem;
  font-weight: 700;

  color: var(--blue);

  margin-bottom: 2.5rem;

  width: 54rem;
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  font-weight: 400;

  width: 49rem;

  margin-bottom: 2.5rem;
`;

export const DotsWrapper = styled.div`
  position: relative;
  width: 37rem;
  height: 14rem;
`;

export const PhotoWrapper = styled.div`
  position: relative;

  min-width: 60rem;
  width: 60rem;
  min-height: 65rem;
  height: 65rem;
`;

export const Absolute = styled.div`
  position: absolute;
  top: -3rem;
  right: 5.5rem;

  width: 60rem;
  height: 65rem;
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.2rem;
  font-weight: 700;

  border: 1px solid var(--light-gray);

  border-radius: 3rem;

  width: 21rem;
  height: 5.8rem;

  svg {
    font-size: 3rem;
    margin-left: 1rem;
  }

  transition-duration: 0.2s;

  :hover {
    background-color: var(--blue);
    color: var(--white);

    transition-duration: 0.2s;
  }
`;

export const AbsoluteArrow = styled.div`
  position: absolute;
  top: 80%;
  left: 92%;

  width: 6rem;
  height: 6rem;
`;

export const ArrowWrapper = styled.div`
  position: relative;
  width: 6rem;
  height: 6rem;
`;

export const AbsoluteLine = styled.div`
  position: absolute;
  top: 50%;
  left: 110%;

  width: 8rem;
  height: 3rem;
`;

export const LineWrapper = styled.div`
  position: relative;

  width: 8rem;
  height: 0.3rem;
`;
