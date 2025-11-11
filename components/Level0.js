import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Level0({ onBack }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nível 0 — Introdução</Text>
      <Text style={styles.text}>Este é o nível de introdução. Apenas demonstra navegação simples de volta ao menu.</Text>
      <View style={styles.spacer} />
      <Button title="Voltar" onPress={onBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  text: { fontSize: 16, color: '#333', textAlign: 'center' },
  spacer: { height: 20 }
});
