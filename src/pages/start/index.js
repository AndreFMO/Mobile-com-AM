import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

export function Start() {
  const navigation = useNavigation();
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('');
  const [selectedDatabase, setSelectedDatabase] = useState('');

  const handleLoginPress = () => {
    // Adicione a lógica para executar o algoritmo com a base de dados selecionada
    console.log(`Executar ${selectedAlgorithm} com base de dados ${selectedDatabase}`);
    // navigation.navigate('MainTabNavigator');
  };

  const handleSignUpPress = () => {
  };

  return (
    <View style={styles.tela}>
      <View style={styles.container}>
        <Text style={styles.title}>Selecione o algoritmo:</Text>
        <Picker
          selectedValue={selectedAlgorithm}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedAlgorithm(itemValue)}
        >
          <Picker.Item style={styles.normalText} label="Selecione um algoritmo" value="" />
          <Picker.Item style={styles.normalText} label="KNN" value="knn" />
          <Picker.Item style={styles.normalText} label="Árvore de Decisão" value="ad" />
        </Picker>

        <Text style={styles.title}>Selecione a base de dados:</Text>

        <TouchableOpacity style={styles.executarButton} onPress={handleLoginPress}>
          <Text style={styles.ButtonText}>Executar Algoritmo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelarButton} onPress={handleSignUpPress}>
          <Text style={styles.ButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  normalText:{
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
  },
  executarButton: {
    backgroundColor: "#D86626",
    width: "100%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#6666",
    elevation: 5,
  },
  cancelarButton: {
    width: "100%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#FFF",
    elevation: 5,
  },
  ButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontFamily: 'Poppins_700Bold',
  },
});
