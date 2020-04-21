import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';

import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Censo() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');

  async function handleSubmit() {
    const dados = {nome, endereco};
    const coletor = 2001;
    await api.post('/api/censo', {coletor, dados});
    Alert.alert('Cadastrado com sucesso!');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>INCLUIR DADOS</Text>
      <TextInput
        style={styles.input}
        placeholder="Informe o nome"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Informe o endereço"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={endereco}
        onChangeText={setEndereco}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

Censo.navigationOptions = {
  tabBarLabel: 'Adicionar',
  tabBarIcon: ({tintColor}) => (
    <Icon name="plussquareo" size={20} color={tintColor} />
  ),
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    marginTop: 50,
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginTop: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },

  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
