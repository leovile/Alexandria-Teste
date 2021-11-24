import * as S from './styles';

import Image from 'next/image';

import greenLine from '../../../public/img/green-line.png';

const SecondSection: React.FC = () => {
  return (
    <S.Container>
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
      <S.TextWrapper>
        <S.Title>O que é</S.Title>
        <S.Paragraph>
          O CRLV-e atualmente é o principal documento de seu veículo e será
          solicitado no momento da fiscalização quando não for possível o acesso
          ao sistema pelo agente. Nele é possível encontrar tanto as informações
          mais básicas como marca/modelo, ano de fabricação e nome do
          proprietário atual quanto as informações mais cruciais como número do
          motor, códigos de segurança, informações sobre restrições e bloqueios
          e até o número do CRV, necessário ao gerar o documento de
          compra/venda.
        </S.Paragraph>
      </S.TextWrapper>
    </S.Container>
  );
};

export default SecondSection;
