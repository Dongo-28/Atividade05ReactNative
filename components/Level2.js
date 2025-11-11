import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Nível 2 — Quiz simples com renderização condicional
const QUESTIONS = [
  { q: 'React Native é para construir aplicações mobile?', a: true },
  { q: 'useState é um Hook do React?', a: true },
  { q: 'O componente TextInput é usado apenas para mostrar texto?', a: false }
];

export default function Level2({ onBack }) {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const current = QUESTIONS[index];

  const answer = (choice) => {
    const correct = choice === current.a;
    if (correct) setScore(s => s + 1);
    setShowAnswer(true);
  };

  const next = () => {
    setShowAnswer(false);
    if (index < QUESTIONS.length - 1) setIndex(i => i + 1);
    else setIndex(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nível 2 — Quiz Interativo</Text>
      <Text style={styles.question}>{current.q}</Text>

      {!showAnswer ? (
        <View style={styles.buttons}>
          <View style={styles.btn}><Button title="Verdadeiro" onPress={() => answer(true)} /></View>
          <View style={styles.btn}><Button title="Falso" onPress={() => answer(false)} /></View>
        </View>
      ) : (
        <View style={styles.result}>
          <Text style={styles.resultText}>
            { ( (current.a && 'Resposta correta!') || (!current.a && 'Resposta correta!') ) }
          </Text>
          <Text style={styles.score}>Pontuação: {score}/{QUESTIONS.length}</Text>
          <Button title={index < QUESTIONS.length - 1 ? 'Próxima' : 'Recomeçar'} onPress={next} />
        </View>
      )}

      <View style={styles.spacer} />
      <Button title="Voltar ao menu" onPress={onBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12, textAlign: 'center' },
  question: { fontSize: 18, marginVertical: 12, textAlign: 'center' },
  buttons: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 12 },
  btn: { width: '40%' },
  result: { alignItems: 'center', marginBottom: 12 },
  resultText: { fontSize: 18, marginBottom: 6 },
  score: { fontSize: 16, color: '#333', marginBottom: 8 },
  spacer: { height: 12 }
});
