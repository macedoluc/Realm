import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

const InformacoesScreen = ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'gray'}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
              color: '#fff',
            }}>
            Página de Informações
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.text}>Ir para Página Inicial</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text}>Ir para Página de Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Listagem')}>
            <Text style={styles.text}>Listagem de Produtos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.text}>Cadastro de Produtos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  text: {
    color: '#fff',
  },
});
export default InformacoesScreen;
