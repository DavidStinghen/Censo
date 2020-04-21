import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import Background from '../../components/Background';
import Response from '../../components/Response';

import {Container, Title, Lists} from './styles';

export default function List() {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    async function loadResponses() {
      const response = await api.get('/api/censo');

      setResponses(response.data);
    }

    loadResponses();
  }, []);

  return (
    <Background>
      <Container>
        <Title>DADOS COLHIDOS</Title>
        <Lists
          data={responses}
          keyExtractor={(item) => String(item.coletor)}
          renderItem={({item}) => <Response data={item} />}
        />
      </Container>
    </Background>
  );
}

List.navigationOptions = {
  tabBarLabel: 'Meu Censo',
  tabBarIcon: ({tintColor}) => (
    <Icon name="folder_open" size={20} color={tintColor} />
  ),
};
