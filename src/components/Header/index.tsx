import { useState, useEffect } from 'react';

import * as S from './styles';

import Image from 'next/image';

import logo from '../../../public/img/logocrlv.png';

interface Size {
  width: number | undefined;
  height: number | undefined;
}

const Header: React.FC = () => {
  const useWindowSize = (): Size => {
    const [windowSize, setWindowSize] = useState<Size>({
      width: undefined,
      height: undefined
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
  };

  const currentWindowWidth = useWindowSize().width;

  return (
    <S.Container>
      <S.LogoWrapper>
        <Image src={logo} layout="fill" objectFit="contain" draggable="false" />
      </S.LogoWrapper>
      <S.Navbar>
        <S.Link>
          <S.Anchor>Home</S.Anchor>
        </S.Link>
        <S.Link>
          <S.Anchor>O que é</S.Anchor>
        </S.Link>
        <S.Link>
          <S.Anchor>Quem pode emitir</S.Anchor>
        </S.Link>
        <S.Link>
          <S.Anchor>Prazo</S.Anchor>
        </S.Link>
        <S.Link>
          <S.Anchor>Lei</S.Anchor>
        </S.Link>
      </S.Navbar>
    </S.Container>
  );
};

export default Header;
