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
`;

export const style = {
  position: 'absolute' as const,
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '70%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
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

  font-size: 2rem;

  border-radius: 1rem;

  background-color: lightgray;

  height: 20rem;
  width: 20rem;

  margin: auto;
`;
export const TemperatureB = styled(TemperatureA)``;

export const StatusA = styled(TemperatureA)`
  font-size: 5rem;
  gap: 3rem;
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
  font-size: 2rem;
  font-weight: 700;
`;

export const Info = styled.p`
  font-size: 3rem;
  font-weight: 500;
`;

export const Status = styled.div`
  font-size: 5rem;
`;

export const Clp = styled.p`
  font-size: 5rem;

  margin-left: auto;
  margin-right: auto;
`;
