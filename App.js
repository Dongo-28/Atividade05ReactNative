import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import Level0 from './components/Level0';
import Level1 from './components/Level1';
import Level2 from './components/Level2';
import Level3 from './components/Level3';

export default function App() {
  const [screen, setScreen] = useState('menu');

  const renderScreen = () => {
    switch(screen) {
      case 'level0': return <Level0 onBack={() => setScreen('menu')} />;
      case 'level1': return <Level1 onBack={() => setScreen('menu')} />;
      case 'level2': return <Level2 onBack={() => setScreen('menu')} />;
      case 'level3': return <Level3 onBack={() => setScreen('menu')} />;
      default:
        return (
          <View style={styles.menu}>
            <Text style={styles.title}>Atividade 05 — Navegação (sem dependências)</Text>
            <View style={styles.buttonRow}>
              <Button title="Nível 0" onPress={() => setScreen('level0')} />
            </View>
            <View style={styles.buttonRow}>
              <Button title="Nível 1" onPress={() => setScreen('level1')} />
            </View>
            <View style={styles.buttonRow}>
              <Button title="Nível 2" onPress={() => setScreen('level2')} />
            </View>
            <View style={styles.buttonRow}>
              <Button title="Nível 3" onPress={() => setScreen('level3')} />
            </View>
            <Text style={styles.hint}>Cada nível demonstra conceitos React Native: useState, TextInput, render condicional e estilos dinâmicos.</Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderScreen()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7f7' },
  menu: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 20, textAlign: 'center' },
  buttonRow: { width: '80%', marginVertical: 6 },
  hint: { marginTop: 20, color: '#666', textAlign: 'center', paddingHorizontal: 10 }
});
