import * as S from './styles';

import Image from 'next/image';

import dots from '../../../public/img/blue-dots.png';
import firstImage from '../../../public/img/first-image.png';
import line from '../../../public/img/black-line-1.png';
import blueRectangle from '../../../public/img/blue-rectangle-1.png';

import { CgArrowRight } from 'react-icons/cg';

const Main: React.FC = () => {
  return (
    <S.Container>
      <S.AbsoluteBlue>
        <S.BlueRectangleWrapper>
          <S.BlueRectangle src={blueRectangle} layout="fill" />
        </S.BlueRectangleWrapper>
      </S.AbsoluteBlue>
      <S.LeftWrapper>
        <S.Title1>
          Você sabia
          <S.AbsoluteLine>
            <S.LineWrapper>
              <Image src={line} layout="fill" draggable="false" />
            </S.LineWrapper>
          </S.AbsoluteLine>
        </S.Title1>
        <S.Title2>
          O Licenciamento do seu veículo agora é totalmente digital!
        </S.Title2>
        <S.Paragraph>
          O CRLV-e, também conhecido como CRLV Digital, contém todas as
          informações do antigo documento impresso porém em um novo layout, e
          que concede o direito de tráfego e legaliza sua circulação.
        </S.Paragraph>
        <S.Button>
          Saiba Mais
          <CgArrowRight />
        </S.Button>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.PhotoWrapper>
          <S.Absolute>
            <S.DotsWrapper>
              <Image
                src={dots}
                layout="fill"
                objectFit="contain"
                draggable="false"
              />
            </S.DotsWrapper>
          </S.Absolute>
          <Image
            src={firstImage}
            layout="fill"
            objectFit="contain"
            draggable="false"
          />
        </S.PhotoWrapper>
      </S.RightWrapper>
    </S.Container>
  );
};

export default Main;
