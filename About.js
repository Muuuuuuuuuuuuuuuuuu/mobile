import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function AboutScreen({ onBack }) {
  const myData = {
    fullname: 'สุพัตรา อุดมเมฆพยัคฆ์',
    nickname: 'มูมู่',
    university: 'มหาวิทยาลัยเกษตรศาสตร์',
    birthday: '04 กุมภาพันธ์ 2548',
    image: 'https://cdn.discordapp.com/attachments/1331945185130844266/1430805134849609728/IMG_5842.jpg?ex=697afe1f&is=6979ac9f&hm=4e5697d9e7163792408f5ac0df154215b4124f5fd533e478acbd8d4adf317bab&://via.placeholder.com/150' 
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>{"< back"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About Me</Text>
        <View style={{ width: 60 }} />
      </View>

      <View style={styles.content}>
        <Image 
          source={{ uri: myData.image }} 
          style={styles.profileImage} 
        />
        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>ชื่อ-นามสกุล:</Text>
            <Text style={styles.infoValue}>{myData.fullname}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>ชื่อเล่น:</Text>
            <Text style={styles.infoValue}>{myData.nickname}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>การศึกษา:</Text>
            <Text style={styles.infoValue}>{myData.university}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>วันเกิด:</Text>
            <Text style={styles.infoValue}>{myData.birthday}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFDE7' 
  },
  headerBar: { 
    height: 80, 
    backgroundColor: '#fff', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 15, 
    paddingTop: 30, 
    elevation: 3 
  },
  backButton: { padding: 10 },
  backText: { fontSize: 16, color: '#FF8A65', fontWeight: 'bold' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  content: { 
    flex: 1, 
    alignItems: 'center', 
    padding: 20,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#FF8A65',
    marginBottom: 20,
  },
  mainTitle: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#FF8A65', 
    marginBottom: 20 
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 3,
  },
  infoRow: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    paddingBottom: 5,
  },
  infoLabel: {
    fontSize: 14,
    color: '#888',
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 2,
  }
});