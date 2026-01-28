import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function ProfileScreen({ form, onBack }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>{"< back"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 60 }} /> 
      </View>

      <View style={styles.content}>
        <Image 
          source={{ uri: form.imageUrl || 'https://via.placeholder.com/150' }} 
          style={styles.profileImage} 
        />

        <View style={styles.infoCard}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>ชื่อ-นามสกุล:</Text>
            <Text style={styles.infoValue}>{form.fullname || 'ไม่ได้ระบุ'}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>อีเมล:</Text>
            <Text style={styles.infoValue}>{form.email || 'ไม่ได้ระบุ'}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>ชื่อผู้ใช้งาน:</Text>
            <Text style={styles.infoValue}>{form.username || 'ไม่ได้ระบุ'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDE7', 
  },
  headerBar: {
    height: 80, 
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 30 ,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    elevation: 4,
  },
  backButton: {
    padding: 10,
  },
  backText: {
    fontSize: 16,
    color: '#FF8A65',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF8A65',
    marginBottom: 20,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: '#FF8A65',
    marginBottom: 25,
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
  },
});