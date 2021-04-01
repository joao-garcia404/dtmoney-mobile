import React from 'react';

import {
  Container,
  TransactionsHeader,
  Title,
  Items,
  Transactions,
  Transaction,
  TransactionTitle,
  TransactionValue,
  TransactionFooter,
  TransactionCategory,
  TransactionDate,
} from './styles';

const TransactionsList: React.FC = () => {
  return (
    <Container>
      <TransactionsHeader>
        <Title>Listagem</Title>
        <Items>4 itens</Items>
      </TransactionsHeader>

      <Transactions>
        <Transaction>
          <TransactionTitle>Desenvolvimento de site</TransactionTitle>
          <TransactionValue>R$ 12.000,00</TransactionValue>

          <TransactionFooter>
            <TransactionCategory>Vendas</TransactionCategory>
            <TransactionDate>13/04/2021</TransactionDate>
          </TransactionFooter>
        </Transaction>

        <Transaction>
          <TransactionTitle>Desenvolvimento de site</TransactionTitle>
          <TransactionValue>R$ 12.000,00</TransactionValue>

          <TransactionFooter>
            <TransactionCategory>Vendas</TransactionCategory>
            <TransactionDate>13/04/2021</TransactionDate>
          </TransactionFooter>
        </Transaction>

        <Transaction>
          <TransactionTitle>Desenvolvimento de site</TransactionTitle>
          <TransactionValue>R$ 12.000,00</TransactionValue>

          <TransactionFooter>
            <TransactionCategory>Vendas</TransactionCategory>
            <TransactionDate>13/04/2021</TransactionDate>
          </TransactionFooter>
        </Transaction>

        <Transaction>
          <TransactionTitle>Desenvolvimento de site</TransactionTitle>
          <TransactionValue>R$ 12.000,00</TransactionValue>

          <TransactionFooter>
            <TransactionCategory>Vendas</TransactionCategory>
            <TransactionDate>13/04/2021</TransactionDate>
          </TransactionFooter>
        </Transaction>
        
        <Transaction>
          <TransactionTitle>Desenvolvimento de site</TransactionTitle>
          <TransactionValue>R$ 12.000,00</TransactionValue>

          <TransactionFooter>
            <TransactionCategory>Vendas</TransactionCategory>
            <TransactionDate>13/04/2021</TransactionDate>
          </TransactionFooter>
        </Transaction>
      </Transactions>
    </Container>
  );
}

export default TransactionsList;