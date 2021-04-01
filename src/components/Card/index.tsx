import React from 'react';

import incomeImg from '../../assets/Entradas.png';
import outcomeImg from '../../assets/saidas.png';
import totalImg from '../../assets/Total.png';

import {
  Cards,
  Container,
  Content,
  Header,
  TransactionType,
  TransactionIcon,
  Transaction,
  TransactionValue,
  LastTransactionDate,
  Total,
  TotalTitle,
  TotalValue,
  TotalTransactionsDate,
} from './styles';

const Card = () => {
  return (
    <Cards horizontal>
      <Container>
        <Content>
          <Header>
            <TransactionType>Entradas</TransactionType>
            <TransactionIcon source={incomeImg} />
          </Header>

          <Transaction>
            <TransactionValue>R$ 17.400,00</TransactionValue>
            <LastTransactionDate>Última entrada dia 13 de abril</LastTransactionDate>
          </Transaction>
        </Content>
      </Container>

      <Container>
        <Content>
          <Header>
            <TransactionType>Saídas</TransactionType>
            <TransactionIcon source={outcomeImg} />
          </Header>

          <Transaction>
            <TransactionValue>R$ 10.400,00</TransactionValue>
            <LastTransactionDate>Última saída dia 03 de abril</LastTransactionDate>
          </Transaction>
        </Content>
      </Container>

      <Total>
        <Content>
          <Header>
            <TotalTitle>Total</TotalTitle>
            <TransactionIcon source={totalImg} />
          </Header>

          <Transaction>
            <TotalValue>R$ 7.000,00</TotalValue>
            <TotalTransactionsDate>01 à 16 de abril</TotalTransactionsDate>
          </Transaction>
        </Content>
      </Total>
    </Cards>
  );
}

export default Card;
