import * as S from './styles';

import whiteLogo from '../../../public/img/white-logo.png';
import whiteLine from '../../../public/img/white-line.png';

const Footer: React.FC = () => {
  return (
    <S.Container>
      <S.TopWrapper>
        <S.LogoWrapper>
          <S.Logo src={whiteLogo} />
        </S.LogoWrapper>
        <S.LinksWrapper>
          <S.Links>
            <S.Title>
              Links Úteis
              <S.Absolute>
                <S.WhiteLineWrapper>
                  <S.WhiteLine src={whiteLine} />
                </S.WhiteLineWrapper>
              </S.Absolute>
            </S.Title>
            <S.Ul>
              <S.Li>
                <S.Anchor>Extrato Devido</S.Anchor>
              </S.Li>
              <S.Li>
                <S.Anchor>IPVA - SEFAZ/PR</S.Anchor>
              </S.Li>
              <S.Li>
                <S.Anchor>DETRAN/PR</S.Anchor>
              </S.Li>
            </S.Ul>
          </S.Links>
          <S.Legislation>
            <S.Title>
              Legislação
              <S.Absolute>
                <S.WhiteLineWrapper>
                  <S.WhiteLine src={whiteLine} />
                </S.WhiteLineWrapper>
              </S.Absolute>
            </S.Title>
            <S.Ul>
              <S.Li>
                <S.Anchor>Deliberação Contran nº 180</S.Anchor>
              </S.Li>
              <S.Li>
                <S.Anchor>Resolução Contran nº 809</S.Anchor>
              </S.Li>
              <S.Li>
                <S.Anchor>Lei 9.503/97 - CTB</S.Anchor>
              </S.Li>
            </S.Ul>
          </S.Legislation>
          <S.Other>
            <S.Title>
              Outros
              <S.Absolute>
                <S.WhiteLineWrapper>
                  <S.WhiteLine src={whiteLine} />
                </S.WhiteLineWrapper>
              </S.Absolute>
            </S.Title>
            <S.Ul>
              <S.Li>
                <S.Anchor>Termos e Condições</S.Anchor>
              </S.Li>
              <S.Li>
                <S.Anchor>Politica de Privacidade</S.Anchor>
              </S.Li>
              <S.Li>
                <S.Anchor>Contato</S.Anchor>
              </S.Li>
            </S.Ul>
          </S.Other>
        </S.LinksWrapper>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.Copyright>© 2021 PORTAL CRLV</S.Copyright>
      </S.BottomWrapper>
    </S.Container>
  );
};

export default Footer;
