import * as S from './styles';

import greenDots from '../../../public/img/green-dots.png';
import secondImage from '../../../public/img/second-image.png';
import greenRectangle from '../../../public/img/green-rectangle.png';
import greenLine from '../../../public/img/green-line.png';
import blackLine from '../../../public/img/black-line-1.png';

const ThirdSection: React.FC = () => {
  return (
    <S.Container>
      <S.AbsoluteGreenRectangle>
        <S.GreenRectangleWrapper>
          <S.GreenRectangle
            src={greenRectangle}
            layout="fill"
            draggable="false"
          />
        </S.GreenRectangleWrapper>
      </S.AbsoluteGreenRectangle>
      <S.PhotoWrapper>
        <S.AbsoluteGreenDots>
          <S.GreenDotsWrapper>
            <S.GreenDots src={greenDots} layout="fill" draggable="false" />
          </S.GreenDotsWrapper>
        </S.AbsoluteGreenDots>
        <S.Photo src={secondImage} layout="fill" draggable="false" />
      </S.PhotoWrapper>
      <S.TextWrapper>
        <S.Title>
          Quem pode emitir
          <S.AbsoluteGreenLine>
            <S.GreenLineWrapper>
              <S.GreenLine src={greenLine} draggable="false" />
            </S.GreenLineWrapper>
          </S.AbsoluteGreenLine>
        </S.Title>
        <S.Paragraph>
          O Proprietário de veículo registrado no Paraná com Certificado de
          Registro de Veículo (CRV) emitido a partir de 12/2006.
        </S.Paragraph>
        <S.LinkWrapper>
          <S.Link>
            Saiba mais
            <S.AbsoluteBlackLine>
              <S.BlackLineWrapper>
                <S.BlackLine src={blackLine} />
              </S.BlackLineWrapper>
            </S.AbsoluteBlackLine>
          </S.Link>
        </S.LinkWrapper>
      </S.TextWrapper>
    </S.Container>
  );
};

export default ThirdSection;
