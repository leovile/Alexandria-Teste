import * as S from './styles';

import { isBrowser } from 'react-device-detect';

import Link from 'next/link';

import logo from '../../../public/img/alexandria.png';

const Header: React.FC = () => {
  return (
    <S.Header>
      <Link href="/" passHref>
        <S.LogoWrapper>
          <S.Logo src={logo} layout="fill" objectFit="contain" />
        </S.LogoWrapper>
      </Link>

      {isBrowser && <S.Name>Desenvolvido por: Leonardo Vilela</S.Name>}
    </S.Header>
  );
};

export default Header;
