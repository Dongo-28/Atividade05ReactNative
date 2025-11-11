import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

// Nível 3 — Jogo de "adivinhar a cor" com estilos dinâmicos
const COLORS = ['red', 'green', 'blue', 'orange', 'purple'];

export default function Level3({ onBack }) {
  const [targetIndex, setTargetIndex] = useState(Math.floor(Math.random() * COLORS.length));
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState('');

  const tryColor = (i) => {
    setSelected(i);
    if (i === targetIndex) {
      setMessage('Acertaste! 🎉');
    } else {
      setMessage('Erraste — tenta outra vez.');
    }
  };

  const reset = () => {
    setTargetIndex(Math.floor(Math.random() * COLORS.length));
    setSelected(null);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nível 3 — Adivinha a cor</Text>
      <Text style={styles.instruction}>Escolhe a cor que corresponde ao alvo.</Text>

      <View style={styles.targetBox}>
        <Text style={styles.targetText}>ALVO</Text>
        <View style={[styles.circle, { backgroundColor: COLORS[targetIndex] }]} />
      </View>

      <View style={styles.options}>
        {COLORS.map((c, i) => (
          <TouchableOpacity
            key={c}
            onPress={() => tryColor(i)}
            style={[
              styles.option,
              selected === i ? styles.selectedOption : null
            ]}
          >
            <View style={[styles.swatch, { backgroundColor: c }]} />
            <Text style={styles.optionLabel}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.message}>{message}</Text>
      <View style={styles.buttons}>
        <Button title="Reset" onPress={reset} />
        <Button title="Voltar" onPress={onBack} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 8, textAlign: 'center' },
  instruction: { textAlign: 'center', color: '#444', marginBottom: 12 },
  targetBox: { alignItems: 'center', marginBottom: 16 },
  targetText: { fontWeight: '700', marginBottom: 8 },
  circle: { width: 80, height: 80, borderRadius: 40, borderWidth: 2, borderColor: '#222' },
  options: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' },
  option: { alignItems: 'center', width: '30%', marginVertical: 8 },
  swatch: { width: 50, height: 50, borderRadius: 8, borderWidth: 1, borderColor: '#333' },
  optionLabel: { marginTop: 6, textTransform: 'capitalize' },
  selectedOption: { transform: [{ scale: 1.05 }], borderWidth: 2, borderColor: '#000' },
  message: { textAlign: 'center', marginTop: 12, fontSize: 16 },
  buttons: { marginTop: 12, flexDirection: 'row', justifyContent: 'space-around' }
});
