import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100% - 10rem);
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  width: 100%;
  height: 100%;

  color: black;

  @media screen and (max-width: 430px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ShowCards = styled.button`
  width: 50%;
  height: 15vh;

  font-size: 3rem;

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

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    width: 80%;
  }
`;

export const style = {
  position: 'absolute' as const,
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  display: 'flex' as const,
  flexDirection: 'column' as const,
  justifyContent: 'center' as const
};

export const TemperatureA = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5.5rem;

  text-align: center;

  border-radius: 1rem;

  background-color: lightgray;

  height: 30rem;
  width: 30rem;

  margin: auto;

  @media screen and (max-width: 1440px) {
    height: 25rem;
    width: 25rem;
  }

  @media screen and (max-width: 1366px) {
    height: 18rem;
    width: 18rem;
  }

  @media screen and (max-width: 430px) {
    height: 12rem;
    width: 12rem;
  }

  @media screen and (max-width: 330px) {
    height: 8rem;
    width: 8rem;

    gap: 2rem;
  }
`;
export const TemperatureB = styled(TemperatureA)``;

export const StatusA = styled(TemperatureA)`
  font-size: 10rem;
  gap: 3rem;

  @media screen and (max-width: 1366px) {
    font-size: 8rem;
  }

  @media screen and (max-width: 430px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 330px) {
    font-size: 2rem;
  }
`;
export const StatusB = styled(StatusA)``;
export const StatusC = styled(StatusA)``;
export const StatusD = styled(StatusA)``;
export const StatusE = styled(StatusA)``;
export const StatusF = styled(StatusA)``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;
`;

export const Button = styled.button`
  width: 10rem;
  height: 5rem;

  color: white;

  border: none;
  border-radius: 1rem;

  background-color: var(--blue);

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
`;

export const Pagination = styled.p`
  font-size: 1.5rem;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 5rem;
  left: 5rem;
  width: 10rem;
  height: 5rem;

  color: white;

  border: none;
  border-radius: 1rem;

  background-color: var(--blue);

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
`;

export const Title = styled.p`
  font-size: 3rem;
  font-weight: 700;

  @media screen and (max-width: 1366px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 430px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 330px) {
    font-size: 1rem;
  }
`;

export const Info = styled.p`
  font-size: 5rem;
  font-weight: 500;

  @media screen and (max-width: 1366px) {
    font-size: 4rem;
  }

  @media screen and (max-width: 430px) {
    font-size: 1.5rem;
  }
`;

export const Status = styled.div`
  font-size: 5rem;
`;

export const Clp = styled.p`
  font-size: 5rem;

  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 430px) {
    font-size: 2rem;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  position: absolute;
  top: 0;
  right: 0;

  width: 5rem;
  height: 5rem;

  svg {
    font-size: 5rem;
  }

  @media screen and (max-width: 430px) {
    width: 4rem;
    height: 4rem;
  }
`;
