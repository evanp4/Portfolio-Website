import React from 'react';
import { StyleSheet, Text, View, ScrollView, Linking } from 'react-native';

export default function ProjectOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>server-one</Text>
        <Text style={styles.sectionContent}>
          Multithreaded web server written in C++ using the Boost.Asio library. Designed to handle multiple client connections concurrently, making it suitable for high-concurrency and distributed systems.
        </Text>
        <Text style={[styles.sectionContent, styles.link]} onPress={() => Linking.openURL('https://github.com/evanp4/server-one')}>
          https://github.com/evanp4/server-one
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Portfolio-Website</Text>
        <Text style={styles.sectionContent}>
          React native application written in Typescript and Javascriptw with expo. Utilizes React Navigation and React Native Elements for styling. Deployed with Vercel.
        </Text>
        <Text style={[styles.sectionContent, styles.link]} onPress={() => Linking.openURL('https://github.com/evanp4/Portfolio-Website')}>
        https://github.com/evanp4/Portfolio-Website
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F4F4F', // Slate gray background
  },
  section: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: 'rgba(62, 78, 80, 0.8)', // Slightly lighter slate gray with transparency
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Times New Roman',
    color: '#90EE90', // Light green text
  },
  sectionContent: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Times New Roman',
    color: '#D3D3D3', // Slightly less bright text
  },
  link: {
    color: 'lightgreen',
    textDecorationLine: 'underline',
  },
});