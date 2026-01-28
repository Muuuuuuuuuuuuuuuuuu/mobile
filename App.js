import React, { useState } from 'react';
import RegistrationScreen from './src/screens/Registration';
import ProfileScreen from './src/screens/Profile';
import AboutScreen from './src/screens/About'; 
export default function App() {
  const [page, setPage] = useState('register');
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    username: '',
    password: '',
    imageUrl: '',
  });

  const handleChange = (name, value) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {page === 'register' && (
        <RegistrationScreen
          form={form}
          handleChange={handleChange}
          onSubmit={() => setPage('profile')}
          onNavigate={(target) => setPage(target)} 
        />
      )}

      {page === 'profile' && (
        <ProfileScreen 
          form={form} 
          onBack={() => setPage('register')} 
        />
      )}

      {page === 'about' && (
        <AboutScreen 
          onBack={() => setPage('register')} 
        />
      )}
    </>
  );
}