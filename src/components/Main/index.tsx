import * as S from './styles';

import Link from 'next/link';

import { BsClipboardData, BsGraphUp } from 'react-icons/bs';

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.ButtonsWrapper>
        <S.Wrapper>
          <S.Title>Desafio 01</S.Title>

          <Link href="/Challenge1" passHref>
            <S.Challenge1>
              <BsClipboardData />
            </S.Challenge1>
          </Link>
        </S.Wrapper>

        <S.Wrapper>
          <S.Title>Desafio 02</S.Title>

          <Link href="/Challenge2" passHref>
            <S.Challenge2>
              <BsGraphUp />
            </S.Challenge2>
          </Link>
        </S.Wrapper>
      </S.ButtonsWrapper>
    </S.Container>
  );
};

export default Main;
