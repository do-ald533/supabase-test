import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { Teams } from './routes/teams';

ReactDOM.render(
    <BrowserRouter>
    <ChakraProvider>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="team" element={<Teams />} />
    </Routes>
    </ChakraProvider>
    </BrowserRouter>,
  document.getElementById('root')
);
