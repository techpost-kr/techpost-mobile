import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <WebView
            style={{ flex: 1 }}
            source={{ uri: 'https://techpost.kr' }}
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
