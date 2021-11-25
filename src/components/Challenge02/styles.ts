import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: calc(100% - 10rem);

  padding: 15rem 15rem;

  @media screen and (max-width: 1440px) {
    padding: 12rem 10rem 5rem 10rem;
  }

  @media screen and (max-width: 430px) {
    padding: 10rem 1rem 10rem 0;
  }
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

  @media screen and (max-width: 430px) {
    top: 1rem;
    left: 1rem;
  }
`;
