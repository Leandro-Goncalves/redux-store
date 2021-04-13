import React from 'react';
import { Provider } from 'react-redux'
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';

import store from './store';
import { Container } from './styles';
import { Catalog } from './components/Catalog';
import { ModalCart } from './components/ModalCart';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Container>
        <Catalog />
        <GlobalStyle />
        <ModalCart />
      </Container>
      <ToastContainer/>
    </Provider>
  );
}

export default App;
