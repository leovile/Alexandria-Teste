import styled from 'styled-components';

import Image from 'next/image';

export const Container = styled.div`
  width: 100%;
  height: 38rem;

  background-color: var(--blue);

  padding: 0 12rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(Image)``;

export const TopWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 30rem;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 8rem;
`;

export const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Links = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 2.4rem;
`;

export const Legislation = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 2.4rem;
`;

export const Other = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 2.4rem;
`;

export const Copyright = styled.p`
  font-size: 2.2rem;
  font-weight: 400;
  color: white;
`;

export const Title = styled.div`
  position: relative;
  font-size: 2.2rem;
  font-weight: 500;
  color: white;

  margin-left: 30%;
  margin-bottom: 3rem;
`;

export const Ul = styled.ul`
  list-style-type: none;

  margin-left: 30%;
`;

export const Li = styled.li`
  margin-bottom: 2.4rem;
`;

export const Anchor = styled.a`
  font-size: 2.2rem;
  font-weight: 400;
  color: white;
`;

export const Absolute = styled.div`
  position: absolute;
  top: -3rem;
  left: 0;
`;

export const WhiteLineWrapper = styled.div``;

export const WhiteLine = styled(Image)``;
