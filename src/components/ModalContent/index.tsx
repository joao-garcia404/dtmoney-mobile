import React, { useState } from 'react';

import closeImg from '../../assets/close.png';
import incomeImg from '../../assets/Entradas.png';
import outcomeImg from '../../assets/saidas.png';

import { 
  Container,
  Header,
  HeaderText,
  CloseModalButton,
  CloseIcon,
  Form,
  InputContainer,
  Input,
  TransactionTypeContainer,
  Type,
  TypeIcon,
  TypeText,
  CreateTransactionButton,
  CreateTransactionButtonText,
} from './styles';

interface ModalContentProps {
  closeModal: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({ closeModal }) => {
  const [type, setType] = useState('deposit');

  return (
    <Container>
      <Header>
        <HeaderText>Cadastrar transação</HeaderText>
        <CloseModalButton onPress={closeModal}>
          <CloseIcon source={closeImg} />
        </CloseModalButton>
      </Header>

      <Form>
        <InputContainer>
          <Input placeholder="Nome" />
        </InputContainer>

        <InputContainer>
          <Input placeholder="Preço" />
        </InputContainer>

        <TransactionTypeContainer>
          <Type
            onPress={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <TypeIcon source={incomeImg} />
            <TypeText>Entrada</TypeText>
          </Type>

          <Type
            onPress={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <TypeIcon source={outcomeImg} />
            <TypeText>Saída</TypeText>
          </Type>
        </TransactionTypeContainer>

        <InputContainer>
          <Input placeholder="Categoria" />
        </InputContainer>

        <CreateTransactionButton onPress={closeModal}>
          <CreateTransactionButtonText>Cadastrar</CreateTransactionButtonText>
        </CreateTransactionButton>
      </Form>
    </Container>
  );
}

export default ModalContent;
