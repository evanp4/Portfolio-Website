import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://your-profile-picture-url.com' }} style={styles.profilePic} />
        <Text style={styles.name}>Evan Pillow</Text>
        <Text style={styles.bio}>I'm a passionate software developer with a strong foundation in data structures, algorithms, and software design principles. I am always excited to solve complex problems and build efficient, high-performance applications. My expertise spans across system programming, multithreading, and distributed systems, with a particular interest in concurrency and performance optimization.
Outside of programming, I am keenly interested in open-source development and software architecture. I enjoy experimenting with new technologies and continually improving my skills by tackling challenging projects. When I'm not coding, I love reading about emerging tech trends, contributing to tech communities, and exploring the intersection of artificial intelligence and machine learning.
I’m currently seeking opportunities to collaborate on innovative, high-impact projects in a dynamic team environment. Feel free to check out my work on GitHub or reach out to me about potential projects.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        <Text style={styles.sectionContent}>Computer Engineer II, Mikel Inc. (Oct 2022 - Current)</Text>
        <Text style={styles.sectionContent}>- Implemented and tested acoustic signal processing algorithms for detection, classification, and tracking of submerged maritime contacts in an Agile development environment.</Text>
        <Text style={styles.sectionContent}>- Analyzed output parity, stability, and computational resource requirements using operational software and algorithm development models.</Text>
        <Text style={styles.sectionContent}>- Developed and modified toolsets to expedite signal processing analysis, performance evaluation, and geometric reconstruction using primary sensor data and instrumentation measurements for in-water operational exercises.</Text>
        <Text style={styles.sectionContent}>- Provided performance metrics, qualitative assessments, and briefing material for the Code 8522 Weapons Algorithms Systems Branch at Naval Undersea Warfare Center.</Text>
        <Text style={styles.sectionContent}>Technologies Used: Python, C, C#, .NET, Matlab, Git, Jira, SQL, Atlassian suite, Windows, Linux</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <Text style={styles.sectionContent}>
          Programming Languages: C++, C, Python, C#, Java, Ada, Matlab, Typescript, Javascript{"\n"}
          Technologies/Frameworks: Git, .NET, React Native, Node.js, PyTorch, Keras, Pandas, NumPy, TensorFlow, Atlassian Tool Suite{"\n"}
          Operating Systems: macOS, Windows, Linux, VxWorks{"\n"}
          Relevant Coursework: Proficient in algorithm development, data structures, visualization, digital signal processing, ocean and above-ground acoustics and psychoacoustics, guidance navigation and control related technologies and sensors.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.sectionContent}>
          <Text style={styles.boldText}>Georgia Institute of Technology - College of Computing, Atlanta, GA</Text> (Jan 2025 - TBD){"\n"}
          M.S. in Computer Science{"\n"}
          - Specialization in Interactive Intelligence. Admitted for the Spring 2025 semester starting January.{"\n"}
          {"\n"}<Text style={styles.boldText}>University of Michigan, Ann Arbor, MI</Text> (Aug 2018 - April 2022){"\n"}
          B.S. in Sound Engineering, Minor in Electrical Engineering{"\n"}
          - Multidisciplinary coursework in the PAT department focused on developing advanced computational systems and algorithms, with an emphasis on the mathematical foundations of engineering and software development. Coursework included extensive study in calculus, differential equations, and physics, which provided a strong understanding of system modeling, optimization, and problem-solving. In addition, engineering courses in Digital Signal Processing (DSP) and Circuit design applied principles of both analog and digital signal processing to develop software solutions in real-time systems, control systems, and performance-critical applications. These courses incorporated both theoretical and practical elements, blending engineering theory with hands-on programming skills.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <View style={styles.contactItem}>
          <Ionicons name="mail" size={20} color="lightgreen" />
          <Text style={[styles.sectionContent, styles.contactText]}>epillow3@gatech.edu</Text>
        </View>
        <View style={styles.contactItem}>
          <Ionicons name="logo-linkedin" size={20} color="lightgreen" />
          <Text style={[styles.link, styles.contactText]} onPress={() => Linking.openURL('https://www.linkedin.com/in/evan-pillow-b74107204/')}>https://www.linkedin.com/in/evan-pillow-b74107204/</Text>
        </View>
        <View style={styles.contactItem}>
          <Ionicons name="logo-github" size={20} color="lightgreen" />
          <Text style={[styles.link, styles.contactText]} onPress={() => Linking.openURL('https://github.com/evanp2')}>https://github.com/evanp2</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Evan Pillow. All rights reserved.</Text>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F4F4F', // Slate gray background
    marginTop: -50, // Adjust this value to move content higher
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(63, 79, 79, 0.8)', // Slate gray with transparency
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    fontFamily: 'Times New Roman',
    color: '#90EE90', // Light text
  },
  bio: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    fontFamily: 'Times New Roman',
    color: '#D3D3D3', // Slightly less bright text
    lineHeight: 24, // 1.5 times the font size
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
  boldText: {
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  contactText: {
    marginLeft: 10, // Add space between the icon and the text
  },
  link: {
    color: 'lightgreen',
    textDecorationLine: 'underline',
    fontFamily: 'Times New Roman',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'Times New Roman',
  },
});
