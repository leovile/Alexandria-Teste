import { useEffect, useState } from 'react';

import * as S from './styles';

import * as T from './types';

import Link from 'next/link';

import React from 'react';

import api from '../../services/api';
import { AxiosResponse } from 'axios';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const Challenge02: React.FC = () => {
  const [info, setInfo] = useState<T.DataProps>();

  const getData = async () => {
    try {
      const response = await api.get<unknown, AxiosResponse<T.DataProps>>(
        '/desafio_02'
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
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={info?.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="consume"
            stroke="#8884d8"
            activeDot={{ r: 6 }}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="generation"
            stroke="#82ca9d"
            activeDot={{ r: 6 }}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#ff0000"
            activeDot={{ r: 6 }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </S.Container>
  );
};

export default Challenge02;
