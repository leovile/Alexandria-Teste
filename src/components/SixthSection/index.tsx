import * as S from './styles';

import Image from 'next/image';

import greenLine from '../../../public/img/green-line.png';

const SixthSection: React.FC = () => {
  return (
    <S.Container>
      <S.TextWrapper>
        <S.Title>
          O que diz a lei
          <S.AbsoluteLine>
            <S.LineWrapper>
              <Image
                src={greenLine}
                layout="fill"
                objectFit="contain"
                draggable="false"
              />
            </S.LineWrapper>
          </S.AbsoluteLine>
        </S.Title>
        <S.Paragraph>
          Conforme dispõe a deliberação do Contran 180/2019, o CRLV-e será
          expedido em substituição ao CRLV e é suficiente para fim de
          cumprimento do contido no caput do art. 133 do Código de Trânsito
          Brasileiro - “É obrigatório o porte do Certificado de Licenciamento
          Anual.”
        </S.Paragraph>
      </S.TextWrapper>
    </S.Container>
  );
};

export default SixthSection;
