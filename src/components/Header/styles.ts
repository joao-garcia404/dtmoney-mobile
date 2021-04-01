import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 170px;
  background: #5429cc;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
  margin-top: 10px;
`;

export const Logo = styled.Image``;

export const NewTransactionButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  padding: 10px 20px;
  border-radius: 5px;
  background: #6933ff;
`;

export const NewTransactionButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
