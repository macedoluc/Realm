import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import {listarProdutos} from '../../data/produto/produto_db';

const listagemScreen = ({route, navigation}) => {
  const [produtos, setProdutos] = useState(listarProdutos());

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'gray'}}>
        <FlatList
          data={produtos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item: produto, index}) => {
            //é um array, ou seja, para cada linha vai retornar o que etá dentro dele
            return (
              <View style={styles.container}>
                <Text style={(styles.text, styles.cor)}>
                  {produto.produto_id}
                </Text>
                <Text style={styles.text}>Nome: {produto.produto_nome}</Text>
                <Text style={styles.text}>
                  Descrição: {produto.produto_descricao}
                </Text>
                <Text style={styles.text}>R$: {produto.produto_preco}</Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
  },
  cor: {
    color: '#000',
  },
});

export default listagemScreen;
