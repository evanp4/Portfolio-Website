import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function ProjectOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Project One</Text>
        <Text style={styles.sectionContent}>Description of Project One.</Text>
        <Text style={styles.sectionContent}>Technologies Used: React Native, JavaScript</Text>
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
});
