import styled from 'styled-components/native';

export const Cards = styled.ScrollView`
  margin-top: -100px;
`;

export const Container = styled.View`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  margin-left: 20px;
  background: #fff;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TransactionType = styled.Text`
  font-size: 16px;
  color: #363F5F;
`;

export const TransactionIcon = styled.Image``;

export const Transaction = styled.View`
  margin-top: 30px;
`;

export const TransactionValue = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #363F5F;
`;

export const LastTransactionDate = styled.Text`
  font-size: 14px;
  color: #969CB2;
`;

export const Total = styled.View`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  margin-left: 20px;
  background: #33CC95;
`;

export const TotalTitle = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const TotalValue = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

export const TotalTransactionsDate = styled.Text`
  font-size: 14px;
  color: #fff;
`;
