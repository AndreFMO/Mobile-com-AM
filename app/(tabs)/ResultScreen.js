import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DecisionTree from './DecisionTree';


const ResultScreen = ({ route }) => {
  const { result } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Resultado</Text>
      <View style={styles.resultContainer}>
        <Text style={styles.resultItem}>Selecionado: {result?.algorithm}</Text>
        {result?.algorithm !== 'Algoritmo Genetico' && (
          <>
            <Text style={styles.resultText}> </Text>
            <Text style={styles.resultItem}>Instâncias: {result?.instances}</Text>
            <Text style={styles.resultItem}>Classes: {result?.classes}</Text>
          </>
        )}
        {result?.attributes && (
          <Text style={styles.resultItem}>Atributos: {result.attributes.join(', ')}</Text>
        )}
        {result?.algorithm === 'KNN' && result?.accuracy !== undefined && (
          <Text style={styles.resultItem}>Acurácia: {result.accuracy.toFixed(2)}%</Text>
        )}
        {result?.algorithm === 'Árvore de Decisão' && result?.decisionTree ? (
          <>
            {result.decisionTree.accuracy !== undefined && (
              <Text style={styles.resultItem}>Acurácia: {result.decisionTree.accuracy.toFixed(2)}%</Text>
            )}
            <DecisionTree decisionTree={result.decisionTree} accuracy={result.accuracy} />
          </>
        ) : null}
        {result?.algorithm === 'Algoritmo Genetico' && result?.x !== undefined && result?.y !== undefined && result?.z !== undefined ? (
          <View style={styles.container}>
            <Text style={styles.resultText}>O melhor indivíduo:</Text>
            <Text style={styles.resultText}> X = {result.x},   Y = {result.y},   Z = {result.z}</Text>
            <Text style={styles.resultText}> </Text>
            <Text style={styles.resultText}> Fitness = {result.fitness}</Text>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  resultItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ResultScreen;
