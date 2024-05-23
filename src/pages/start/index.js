import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';

export function Start() {
  const navigation = useNavigation();
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedDatabase, setSelectedDatabase] = useState('');
  const [fileName, setFileName] = useState('');

  const handleLoginPress = () => {
    console.log(`Executar ${selectedAlgorithm} com base de dados ${selectedDatabase}`);
  };

  const handleSignUpPress = () => {
  };

  const handleFilePick = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['text/csv', 'application/octet-stream'], 
      });
      if (result.type === 'success') {
        setSelectedDatabase(result.uri);
        setFileName(result.name);
      }
    } catch (err) {
      console.error("Erro ao selecionar o arquivo: ", err);
    }
  };

  return (
    <View style={styles.tela}>
      <View style={styles.container}>
        <Text style={styles.title}>Selecione o algoritmo:</Text>
        <DropDownPicker
          open={open}
          value={selectedAlgorithm}
          items={[
            { label: 'Selecione um algoritmo', value: null },
            { label: 'KNN', value: 'knn' },
            { label: 'Árvore de Decisão', value: 'ad' },
          ]}
          setOpen={setOpen}
          setValue={setSelectedAlgorithm}
          style={styles.picker}
          dropDownContainerStyle={styles.dropDownContainer}
          placeholder="Selecione um algoritmo"
        />

        <Text style={styles.title}>Selecione a base de dados:</Text>
        <TouchableOpacity style={styles.fileButton} onPress={handleFilePick}>
          <Text style={styles.ButtonText}>Selecionar Arquivo</Text>
        </TouchableOpacity>
        {fileName ? <Text style={styles.fileName}>{fileName}</Text> : null}

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
    borderColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  dropDownContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  fileButton: {
    backgroundColor: "#007BFF",
    width: "100%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 80,
    borderWidth: 1,
    borderColor: "#6666",
    elevation: 5,
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
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 25,
    elevation: 5,
  },
  ButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontFamily: 'Poppins_700Bold',
  },
  fileName: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    marginBottom: 20,
  },
});
