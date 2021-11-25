import { useState, useEffect } from 'react';

import Link from 'next/link';

import uniqid from 'uniqid';

import api from '../../services/api';

import * as S from './styles';

import * as T from './types';

import { AxiosResponse } from 'axios';

import { FcCheckmark, FcHighPriority } from 'react-icons/fc';

import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';

const Challenge1: React.FC = () => {
  const [info, setInfo] = useState<T.DataProps>();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [page, setPage] = useState(0);

  const getData = async () => {
    try {
      const response = await api.get<unknown, AxiosResponse<T.DataProps>>(
        '/desafio_01'
      );

      const { data } = response;
      console.log(data);

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
          {info?.data?.map(
            (item: T.DataProps, index) =>
              page === index && (
                <S.Cards key={uniqid()} index={index}>
                  <S.TemperatureA>{Object.keys(item)[0]}</S.TemperatureA>
                  <S.TemperatureB>{item.temperatureA}</S.TemperatureB>
                  <S.StatusA>
                    {item.statusA === 1 ? <FcCheckmark /> : <FcHighPriority />}
                  </S.StatusA>
                  <S.StatusB>
                    {item.statusB === 1 ? <FcCheckmark /> : <FcHighPriority />}
                  </S.StatusB>
                  <S.StatusC>
                    {item.statusC === 1 ? <FcCheckmark /> : <FcHighPriority />}
                  </S.StatusC>
                  <S.StatusD>
                    {item.statusD === 1 ? <FcCheckmark /> : <FcHighPriority />}
                  </S.StatusD>
                  <S.StatusE>
                    {item.statusE === 1 ? <FcCheckmark /> : <FcHighPriority />}
                  </S.StatusE>
                  <S.StatusF>
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

export default Challenge1;
