import styled from 'styled-components';

import Image from 'next/image';

export const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 10rem 27rem 0 27rem;
`;

export const Absolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 75rem;
`;

export const BlueRectangleWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 75rem;
`;

export const BlueRectangle = styled(Image)``;

export const CalendarWrapper = styled.div`
  position: relative;

  width: 57rem;
  height: 77rem;
`;

export const Calendar = styled(Image)``;

export const AbsoluteBlueDots = styled.div`
  position: absolute;
  top: 0.5rem;
  right: -0.5rem;
`;

export const BlueDotsWrapper = styled.div`
  position: relative;
`;

export const BlueDots = styled(Image)``;

export const TextWrapper = styled.div`
  width: 50%;
`;

export const Title = styled.div`
  position: relative;
  font-size: 6rem;
  font-weight: 700;
  color: var(--blue);
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;
  color: var(--dark-gray);
`;

export const AbsoluteBlueLine = styled.div`
  position: absolute;
  top: -6rem;
  left: 0;
`;

export const BlueLineWrapper = styled.div`
  position: relative;
`;

export const BlueLine = styled(Image)``;
