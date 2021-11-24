import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;

  width: 100%;

  padding: 3rem 0 10rem 0;
`;

export const AbsoluteLine = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 3.75rem);

  width: 10rem;
  height: 6rem;
`;

export const LineWrapper = styled.div`
  position: relative;
  width: 7.5rem;
  height: 6rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Title = styled.h1`
  font-size: 6rem;
  font-weight: 700;

  color: var(--green);

  margin-bottom: 2.5rem;
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  font-weight: 400;
  line-height: 4rem;

  width: 100rem;

  text-align: center;

  color: var(--light-gray);
`;
