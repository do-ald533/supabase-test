import React from 'react';
import './App.css';
import { Button } from '@chakra-ui/react'
import Header from './components/header';
import { ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig ={
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

function App() {
  return (
    <Header />
  );
}

export default App;
