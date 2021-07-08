import * as React from 'react';
import {View, StyleSheet, SafeAreaView, TextInput} from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = React.useState();
  const [senha, setSenha] = React.useState();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{margin: 5}}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
        />
      </View>
      <View style={{margin: 5}}>
        <TextInput
          style={styles.input}
          placeholder="Digite a descrição do produto"
          onChangeText={setSenha}
          value={senha}
          secureTextEntry={true}
        />
      </View>
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
});
export default LoginScreen;
