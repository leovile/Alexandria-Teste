import * as S from './styles';

import blueRectangle from '../../../public/img/blue-rectangle-2.png';
import calendar from '../../../public/img/calendar.png';
import blueDots from '../../../public/img/blue-dots.png';
import blueLine from '../../../public/img/blue-line.png';

const FifthSection: React.FC = () => {
  return (
    <S.Container>
      <S.Absolute>
        <S.BlueRectangleWrapper>
          <S.BlueRectangle src={blueRectangle} layout="fill" />
        </S.BlueRectangleWrapper>
      </S.Absolute>
      <S.CalendarWrapper>
        <S.AbsoluteBlueDots>
          <S.BlueDotsWrapper>
            <S.BlueDots src={blueDots} />
          </S.BlueDotsWrapper>
        </S.AbsoluteBlueDots>
        <S.Calendar src={calendar} layout="fill" objectFit="contain" />
      </S.CalendarWrapper>
      <S.TextWrapper>
        <S.Title>
          Prazo
          <S.AbsoluteBlueLine>
            <S.BlueLineWrapper>
              <S.BlueLine src={blueLine} />
            </S.BlueLineWrapper>
          </S.AbsoluteBlueLine>
        </S.Title>
        <S.Paragraph>
          O CRLV-e é atualizado em até 3 dias úteis após a quitação dos débitos
          do veículo (Licenciamento, DPVAT, IPVA e multas obrigatórias).
        </S.Paragraph>
      </S.TextWrapper>
    </S.Container>
  );
};

export default FifthSection;
