import styled from 'styled-components';

import Image from 'next/image';

export const Container = styled.div``;

export const LogoWrapper = styled.div`
  position: relative;

  width: 30rem;
  height: 100%;
`;

export const Logo = styled(Image)``;

export const Name = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: white;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: calc(100vh - 10rem);

  padding: 0 20rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;

  gap: 3rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

export const Challenge1 = styled.button`
  width: 30rem;
  height: 30rem;

  font-size: 10rem;

  background-color: var(--blue);
  color: white;

  border: none;
  border-radius: 1rem;

  transition-duration: 0.3s;

  :hover {
    transform: scale(1.05);
    transition-duration: 0.3s;

    -webkit-box-shadow: 10px 10px 15px 0px rgba(105, 105, 105, 0.9);
    -moz-box-shadow: 10px 10px 15px 0px rgba(105, 105, 105, 0.9);
    box-shadow: 10px 10px 15px 0px rgba(105, 105, 105, 0.9);
  }

  -webkit-box-shadow: 5px 5px 15px 0px rgba(105, 105, 105, 0.9);
  -moz-box-shadow: 5px 5px 15px 0px rgba(105, 105, 105, 0.9);
  box-shadow: 5px 5px 15px 0px rgba(105, 105, 105, 0.9);

  @media screen and (max-width: 1024px) {
    width: 20rem;
    height: 20rem;
    font-size: 5rem;
  }

  @media screen and (max-width: 1024px) {
    width: 15rem;
    height: 15rem;
  }
`;

export const Challenge2 = styled(Challenge1)``;
