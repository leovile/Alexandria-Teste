import { useState, useEffect } from 'react';

import { isMobile } from 'react-device-detect';

import Link from 'next/link';

import uniqid from 'uniqid';

import api from '../../services/api';

import * as S from './styles';

import * as T from './types';

import { AxiosResponse } from 'axios';

import { FcCheckmark, FcHighPriority } from 'react-icons/fc';
import { AiFillCloseSquare } from 'react-icons/ai';

import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';

const Challenge01: React.FC = () => {
  const [info, setInfo] = useState<T.DataProps>();
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getData = async () => {
    try {
      const response = await api.get<unknown, AxiosResponse<T.DataProps>>(
        '/desafio_01'
      );

      const { data } = response;

      setInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <S.Container>
      <Link href="/" passHref>
        <S.BackButton>Voltar</S.BackButton>
      </Link>
      <S.ShowCards onClick={handleOpen}>Acessar Informações</S.ShowCards>
      <Modal open={open} onClose={handleClose}>
        <Box sx={S.style}>
          <S.CloseButton onClick={handleClose}>
            <AiFillCloseSquare />
          </S.CloseButton>
          <S.Clp>CLP {page + 1}</S.Clp>
          {info?.data?.map(
            (item: T.DataProps, index) =>
              page === index && (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                <S.Cards key={uniqid()} index={index}>
                  <S.TemperatureA>
                    <S.Title>{Object.keys(item)[0]}</S.Title>
                    <S.Info>{item.temperatureA} °C</S.Info>
                  </S.TemperatureA>

                  <S.TemperatureB>
                    <S.Title>{Object.keys(item)[1]}</S.Title>
                    <S.Info>{item.temperatureB} °C</S.Info>
                  </S.TemperatureB>

                  <S.StatusA>
                    <S.Title>{Object.keys(item)[2]}</S.Title>
                    {item.statusA === 1 ? <FcCheckmark /> : <FcHighPriority />}
                  </S.StatusA>

                  <S.StatusB>
                    <S.Title>{Object.keys(item)[3]}</S.Title>

                    {item.statusB === 1 ? <FcCheckmark /> : <FcHighPriority />}
                  </S.StatusB>

                  <S.StatusC>
                    <S.Title>{Object.keys(item)[4]}</S.Title>

                    {item.statusC === 1 ? <FcCheckmark /> : <FcHighPriority />}
                  </S.StatusC>

                  <S.StatusD>
                    <S.Title>{Object.keys(item)[5]}</S.Title>

                    {item.statusD === 1 ? <FcCheckmark /> : <FcHighPriority />}
                  </S.StatusD>

                  <S.StatusE>
                    <S.Title>{Object.keys(item)[6]}</S.Title>

                    {item.statusE === 1 ? <FcCheckmark /> : <FcHighPriority />}
                  </S.StatusE>

                  <S.StatusF>
                    <S.Title>{Object.keys(item)[7]}</S.Title>

                    {item.statusF === 1 ? <FcCheckmark /> : <FcHighPriority />}
                  </S.StatusF>
                </S.Cards>
              )
          )}
          <S.Wrapper>
            <S.Button
              onClick={
                page > 0
                  ? () => setPage((prev) => prev - 1)
                  : () => setPage((prev) => prev - 0)
              }
            >
              Voltar
            </S.Button>
            <S.Button
              onClick={
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                page < info?.data?.length - 1
                  ? () => setPage((prev) => prev + 1)
                  : () => setPage((prev) => prev + 0)
              }
            >
              Próximo
            </S.Button>
            <S.Pagination>
              Página {page + 1} de {info?.data?.length}
            </S.Pagination>
          </S.Wrapper>
        </Box>
      </Modal>
    </S.Container>
  );
};

export default Challenge01;
