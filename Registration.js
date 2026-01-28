import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import CustomTextInput from '../components/Textinput';

export default function RegistrationScreen({ form, handleChange, onSubmit, onNavigate }) {
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.header}>ลงทะเบียนเรียน</Text>
          
          <CustomTextInput label="ชื่อ-นามสกุล"  value={form.fullname} onChangeText={(t) => handleChange('fullname', t)} />
          <CustomTextInput label="อีเมล"  value={form.email} onChangeText={(t) => handleChange('email', t)} />
          <CustomTextInput label="ลิงก์รูปโปรไฟล์"  value={form.imageUrl} onChangeText={(t) => handleChange('imageUrl', t)} />
          <CustomTextInput label="ชื่อผู้ใช้"  value={form.username} onChangeText={(t) => handleChange('username', t)} />
          <CustomTextInput label="รหัสผ่าน"  secureTextEntry value={form.password} onChangeText={(t) => handleChange('password', t)} />

          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonText}>ยืนยันข้อมูล</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomTab}>
        <TouchableOpacity style={styles.tabItem} onPress={() => onNavigate('register')}>
          <Text style={[styles.tabText, { color: 'lightsalmon' }]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => onNavigate('about')}>
          <Text style={styles.tabText}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#F5F7FB' },
  scrollContainer: { flexGrow: 1, justifyContent: 'center', padding: 20, paddingBottom: 100 },
  card: { backgroundColor: '#fff', borderRadius: 20, padding: 20, elevation: 5 },
  header: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#FF8A65', padding: 15, borderRadius: 15, alignItems: 'center', marginTop: 25 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  bottomTab: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    elevation: 10,
  },
  tabItem: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tabText: { fontSize: 14, fontWeight: 'bold', color: '#888' }
});