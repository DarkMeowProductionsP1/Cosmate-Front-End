import React from 'react';
import logo from './logo.svg';
import './styles/App.css';

import { MantineProvider } from '@mantine/core';
import { Affix } from '@mantine/core';
import Landing from "./components/Landing";

function App() {
  return (
      <MantineProvider
      theme={{
        colorScheme: 'dark',
        fontFamily: 'Open Sans, sans serif',
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 }
      }}>
      <Affix position={{ bottom: 20, right: 20 }}>
        <p>Copyright 2022 Darkmeow productions</p>
      </Affix>
    </MantineProvider>
  );
}

export default App;