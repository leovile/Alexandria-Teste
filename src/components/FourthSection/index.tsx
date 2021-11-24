import * as S from './styles';

import blueLine from '../../../public/img/blue-line.png';

const FourthSection: React.FC = () => {
  return (
    <S.Container>
      <S.LeftWrapper>
        <S.Title>
          Como solicitar
          <S.Absolute>
            <S.LineWrapper>
              <S.Line src={blueLine} layout="fill" draggable="false" />
            </S.LineWrapper>
          </S.Absolute>
        </S.Title>
        <S.Paragraph>
          É simples, basta clicar no botão ao lado, preencher as informações
          necessárias, realizar o pagamento e pronto! Em até 15 minutos o
          documento será enviado a você através do meio selecionado.
        </S.Paragraph>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.Button>Solicitar CRLV-e</S.Button>
      </S.RightWrapper>
    </S.Container>
  );
};

export default FourthSection;
