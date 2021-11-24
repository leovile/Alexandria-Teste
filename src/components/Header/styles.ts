import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 10rem;

  padding: 0 20rem;

  z-index: 5;
`;

export const LogoWrapper = styled.div`
  position: relative;

  min-width: 30rem;
  width: 30rem;
`;

export const Navbar = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  width: 85rem;
  margin: 0;
  margin-right: 13rem;

  list-style-type: none;
  padding: 0;
`;

export const Link = styled.li`
  font-size: 2.4rem;
  font-weight: 500;

  padding: 1rem 2rem;

  border-radius: 3rem;

  transition-duration: 0.2s;

  cursor: pointer;

  :hover {
    background-color: var(--blue);
    color: var(--white);

    transition-duration: 0.2s;
  }
`;

export const Anchor = styled.a``;
