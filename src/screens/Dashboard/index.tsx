import React, { useRef } from 'react';
import { StatusBar, Text } from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import TransactionsList from '../../components/TransactionsList';

import { Modalize } from 'react-native-modalize';

import { Container } from './styles';
import ModalContent from '../../components/ModalContent';

const Dashboard: React.FC = () => {
  const modalizeRef = useRef(null);

  function handleOpenModal() {
    modalizeRef.current?.open();
  }

  function handleCloseModal() {
    modalizeRef.current?.close();
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#441cb3" />
      <Header openModal={handleOpenModal} />
      <Card />
      <TransactionsList />

      <Modalize
        ref={modalizeRef}
        modalHeight={680}
      >
        <ModalContent closeModal={handleCloseModal} />
      </Modalize>
    </Container>
  )
}

export default Dashboard;
