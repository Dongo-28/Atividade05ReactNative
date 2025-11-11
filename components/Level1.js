import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Nível 1 — TextInput + estilização dinâmica
export default function Level1({ onBack }) {
  const [name, setName] = useState('');

  const bgColor = name.length === 0 ? '#fff' : (name.length < 5 ? '#ffeedd' : '#e0ffe0');
  const greeting = name ? `Olá, ${name}!` : 'Escreve o teu nome acima';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nível 1 — TextInput & estilos</Text>
      <TextInput
        style={[styles.input, { backgroundColor: bgColor }]}
        value={name}
        onChangeText={setName}
        placeholder="Escreve o teu nome..."
        autoCapitalize="words"
      />
      <Text style={styles.greeting}>{greeting}</Text>
      <View style={styles.spacer} />
      <Button title="Voltar" onPress={onBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 12, borderRadius: 8, fontSize: 16 },
  greeting: { marginTop: 12, fontSize: 18, textAlign: 'center', color: '#333' },
  spacer: { height: 20 }
});
