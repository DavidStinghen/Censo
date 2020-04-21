import React from 'react';

import {Container, Left, Avatar, Info, Colector, Data} from './styles';

export default function Response({data}) {
  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
          }}
        />
        <Info>
          <Colector>Coletor:{data.coletor}</Colector>
          <Data>
            Nome:{' '}
            {JSON.parse(data.dados).nome
              ? JSON.parse(data.dados).nome
              : JSON.parse(data.dados).nome_completo}
          </Data>
          <Data>Endereço: {JSON.parse(data.dados).endereco}</Data>
        </Info>
      </Left>
    </Container>
  );
}
