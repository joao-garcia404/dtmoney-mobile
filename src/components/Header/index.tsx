import React from 'react';

import logoImg from '../../assets/Logo.png';

import { 
  Container,
  Content,
  Logo,
  NewTransactionButton,
  NewTransactionButtonText,
} from './styles';

interface HeaderProps {
  openModal: () => void;
}

const Header: React.FC<HeaderProps> = ( { openModal } ) => {
  return (
    <Container>
      <Content>
        <Logo source={logoImg} />

        <NewTransactionButton onPress={openModal}>
          <NewTransactionButtonText>Nova transação</NewTransactionButtonText>
        </NewTransactionButton>
      </Content>
    </Container>
  );
}

export default Header;
