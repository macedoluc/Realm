import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {cadastrarProdutos} from '../../data/produto/produto_db';

const CadastroScreen = ({navigation}) => {
  const [nome, setNome] = useState(null);
  const [descricao, setDescricao] = useState(null);
  const [preco, setPreco] = useState(null);

  function salvarProduto() {
    //adicionar validação de dados nulos
    cadastrarProdutos(nome, descricao, preco);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{margin: 5}}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do produto"
          onChangeText={nome => setNome(nome)}
          value={nome}
        />
      </View>
      <View style={{margin: 5}}>
        <TextInput
          style={styles.input}
          onChangeText={descricao => setDescricao(descricao)}
          value={descricao}
          placeholder="descrição"
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <View style={{margin: 5}}>
        <TextInput
          style={styles.input}
          placeholder="Digite o preço do produto"
          onChangeText={preco => setPreco(preco)}
          value={preco}
          keyboardType={'numeric'}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={salvarProduto}>
        <Text style={styles.text}>Cadastrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: '#42ff',
    backgroundColor: '#fff',
    height: 35,
    width: 300,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,

    marginTop: 16,
  },
  text: {
    color: '#fff',
  },
});

export default CadastroScreen;
