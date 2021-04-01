import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 30px;
  padding: 0 20px;
`;

export const TransactionsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #363F5F;
`;

export const Items = styled.Text`
  font-size: 15px;
  color: #969CB2;
`;

export const Transactions = styled.ScrollView``;

export const Transaction = styled.View`
  width: 100%;
  padding: 14px 20px;
  border-radius: 5px;
  margin-top: 10px;
  background: #fff;
`;

export const TransactionTitle = styled.Text`
  font-size: 16px;
  color: #363F5F;
`;

export const TransactionValue = styled.Text`
  font-size: 20px;
  color: #12A454;
`;

export const TransactionFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
`;

export const TransactionCategory = styled.Text`
  font-size: 15px;
  color: #969CB2;
`;

export const TransactionDate = styled.Text`
  font-size: 15px;
  color: #969CB2;
`;

