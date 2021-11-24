import styled from 'styled-components';

import Image from 'next/image';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 0 20rem 20rem 20rem;
`;

export const AbsoluteGreenDots = styled.div`
  position: absolute;
  top: -3rem;
  left: 10rem;

  width: 37rem;
  height: 14rem;
`;

export const GreenDotsWrapper = styled.div`
  position: relative;

  width: 37rem;
  height: 14rem;
`;

export const GreenDots = styled(Image)``;

export const PhotoWrapper = styled.div`
  position: relative;

  height: 60rem;
  width: 43.7rem;

  margin-top: 6rem;
`;

export const Photo = styled(Image)``;

export const AbsoluteGreenRectangle = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 80%;
  height: 70rem;

  z-index: -1;
`;

export const GreenRectangleWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 70rem;
`;

export const GreenRectangle = styled(Image)``;

export const TextWrapper = styled.div``;

export const Title = styled.div`
  position: relative;
  font-size: 6rem;
  font-weight: 700;

  color: var(--green);

  margin-bottom: 3.2rem;
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  font-weight: 400;

  width: 49rem;

  color: var(--dark-gray);

  margin-bottom: 3.2rem;
`;

export const Link = styled.a`
  font-size: 2.4rem;
  font-weight: 400;

  color: var(--dark-gray);

  text-decoration: underline;

  margin-left: 4rem;
`;

export const AbsoluteGreenLine = styled.div`
  position: absolute;

  top: -6rem;
  left: 0rem;
`;

export const GreenLineWrapper = styled.div``;

export const GreenLine = styled(Image)``;

export const AbsoluteBlackLine = styled.div`
  position: absolute;

  top: -0.5rem;
  left: 0rem;

  width: 3rem;
`;

export const BlackLineWrapper = styled.div``;

export const BlackLine = styled(Image)``;

export const LinkWrapper = styled.div`
  position: relative;
`;
